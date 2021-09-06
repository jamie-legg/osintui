import { createContext, useContext } from 'react';
import useSurface from '../hooks/useSurface';

const OperationContext = createContext();
const OperationUpdateContext = createContext();

export function OperationWrapper({ children }) {
  const { getDefaultTargetState, getVectorSurfaceMap, getIdentityProviders } = useSurface();
  const vectorMap = getVectorSurfaceMap();
  const providers = getIdentityProviders();
  let sharedState = getDefaultTargetState();

  const updateFns = {

    removeSurfaceFromTarget: (provider) => {
      const target = sharedState[0];
        const { surface } = vectorMap.find(s => s.key === provider.surfaceKey);
        surface.forEach(s => {
            const targetSurface = target.availableVectors.find(as => as.key === s);
            if (targetSurface) {
                targetSurface.priority -= 1;
                if (targetSurface.priority === 0) {
                    target.availableVectors.splice(target.availableVectors.indexOf(targetSurface), 1);
                }
            }
        });
    },
    addSurfaceToTarget : (provider) => {
      const currentTarget = sharedState[0];
      const { surface } = vectorMap.find(s => s.key === provider.surfaceKey);
      // check if surface is already on target
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
      return currentTarget
    },
    addIdentityToTarget: (identity, provider ) => {
      const currentTarget = sharedState[0];
      const { surface } = vectorMap.find(s => s.key === provider);
      // get index of provider from identity providers
      const providerIndex = providers.findIndex(p => p.surfaceKey === provider);
      currentTarget.identities[providerIndex] = {
        platform: provider,
        username: identity
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
    },
    removeIdentityFromTarget: (provider) => {
      const target = sharedState[0];
      const identity = target.identities.find(i => i.platform === provider);
      const { surface } = vectorMap.find(s => s.key === provider);
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
    }
    
  };

  return (
    <OperationContext.Provider value={sharedState}>
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