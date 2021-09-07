import { createContext, useContext, useEffect, useState } from 'react';
import useStorage from '../hooks/useStorage';
import useSurface from '../hooks/useSurface';

const OperationContext = createContext();
const OperationUpdateContext = createContext();

export function OperationWrapper({ children }) {
  const { getItem } = useStorage();
  const { getDefaultOperationState, getDefaultTarget, getVectorSurfaceMap, getIdentityProviders } = useSurface();
  const vectorMap = getVectorSurfaceMap();
  const providers = getIdentityProviders();
  const [ globalOps, setGlobalOps ] = useState(getDefaultOperationState());
  const [ currentTarget, currentTargetState ] = useState(globalOps.operations[globalOps.operationIndex][globalOps.targetIndex]);

  useEffect(() => {
    console.log("checking for stored ops");
    const stored_ops = getItem('operations');
    if (stored_ops) {
      setGlobalOps(stored_ops);
    }
  }, []);

  const getNextTargetId = () => {
    let high_id = 0;
    for (const target of globalOps.operations[globalOps.operationIndex])
      if (target.id > high_id)
        high_id = target.id;
    return high_id + 1;
  }

  const updateFns = {
    newTargetInOperation: () => {
      const newTarget = getDefaultTarget();
      newTarget.id = getNextTargetId();
      globalOps.operations[globalOps.operationIndex].push(newTarget);
      setGlobalOps({ ...globalOps, targetIndex: globalOps.targetIndex+1 });
      return newTarget;
    },
    newOperation: () => {
      globalOps.operations.push([getDefaultTarget()]);
      setGlobalOps({ ...globalOps, operationIndex: operationIndex+1 });
    },

    addIdentityToTarget: (identity, provider ) => {
      const { surface } = vectorMap.find(s => s.key === provider);
      // get index of provider from identity providers
      const providerIndex = providers.findIndex(p => p.surfaceKey === provider);
      const shouldBeDefault = !(currentTarget.identities.find(i => i.default === true));
      if(shouldBeDefault) {
        currentTarget.defaultProviderKey = provider;
        currentTarget.username = identity;
      }
      currentTarget.identities[providerIndex] = {
        platform: provider,
        username: identity,
        active: true,
        default: shouldBeDefault,
      };
      surface.forEach(s => {
        const targetSurface = currentTarget.availableVectors.find(as => as.key === s);
        if (targetSurface) {
            targetSurface.priority += 1;
        } else {
            currentTarget.availableVectors.push({
                key: s,
                priority: 1
            });
        }
    });
    globalOps.operations[globalOps.operationIndex][globalOps.targetIndex] = currentTarget;
    setGlobalOps(globalOps);
    return currentTarget;
    },
    removeIdentityFromTarget: (provider) => {
      const identity = currentTarget.identities.find(i => i.platform === provider.surfaceKey);
      const { surface } = vectorMap.find(s => s.key === provider.surfaceKey);
      currentTarget.identities.splice(currentTarget.identities.indexOf(identity), 1);
      surface.forEach(s => {
          const targetSurface = currentTarget.availableVectors.find(as => as.key === s);
          if (targetSurface) {
              targetSurface.priority -= 1;
              if (targetSurface.priority === 0) {
                currentTarget.availableVectors.splice(currentTarget.availableVectors.indexOf(targetSurface), 1);
              }
          }
      });
      globalOps.operations[globalOps.operationIndex][globalOps.targetIndex] = currentTarget;
      setGlobalOps(globalOps);
      return currentTarget;
    },
    setDefaultProvider: (providerKey) => {
      const target = operationState[globalOps.index];
      target.identities.forEach(i => i.default = false);
      const identity = target.identities.find(i => i.platform === providerKey);
      if(identity) identity.default = true;
      setOperationState([...operationState]);
      return target;
    },
    
  };

  return (
    <OperationContext.Provider value={globalOps}>
      <OperationUpdateContext.Provider value={updateFns}>
        {children}
      </OperationUpdateContext.Provider>
    </OperationContext.Provider>
  );
}

export function useOperation() {
  return useContext(OperationContext);
}

export function useOperationUpdate() {
  const updateFns = useContext(OperationUpdateContext);

  if (updateFns === undefined) {
    throw new Error('useOperationUpdate must be used within a Operations Provider');
  }

  return updateFns;
}