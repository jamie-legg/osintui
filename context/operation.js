import { createContext, useContext, useState } from 'react';
import useSurface from '../hooks/useSurface';

const OperationContext = createContext();
const OperationUpdateContext = createContext();

export function OperationWrapper({ children }) {
  const { getDefaultTargetState, getVectorSurfaceMap, getIdentityProviders } = useSurface();
  const vectorMap = getVectorSurfaceMap();
  const providers = getIdentityProviders();
  const [ operationState, setOperationState ] = useState(getDefaultTargetState());

  const updateFns = {
    addIdentityToTarget: (identity, provider ) => {
      const currentTarget = operationState[0];
      const { surface } = vectorMap.find(s => s.key === provider);
      // get index of provider from identity providers
      const providerIndex = providers.findIndex(p => p.surfaceKey === provider);
      const shouldBeDefault = !(currentTarget.identities.find(i => i.default === true));
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
    setOperationState([...operationState]);
    return currentTarget;
    },
    removeIdentityFromTarget: (provider) => {
      const target = operationState[0];
      console.log(target.identities);
      const identity = target.identities.find(i => i.platform === provider.surfaceKey);
      const { surface } = vectorMap.find(s => s.key === provider.surfaceKey);
      target.identities.splice(target.identities.indexOf(identity), 1);
      surface.forEach(s => {
          const targetSurface = target.availableVectors.find(as => as.key === s);
          if (targetSurface) {
              targetSurface.priority -= 1;
              if (targetSurface.priority === 0) {
                  target.availableVectors.splice(target.availableVectors.indexOf(targetSurface), 1);
              }
          }
      });
      setOperationState([...operationState]);
      return target;
    },
    setDefaultProvider: (providerKey) => {
      const target = operationState[0];
      target.identities.forEach(i => i.default = false);
      const identity = target.identities.find(i => i.platform === providerKey);
      identity.default = true;
      setOperationState([...operationState]);
      return target;
    },
    
  };

  return (
    <OperationContext.Provider value={operationState}>
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