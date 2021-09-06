import { createContext, useContext } from 'react';
import useSurface from '../hooks/useSurface';

const OperationContext = createContext();
const OperationUpdateContext = createContext();

export function OperationWrapper({ children }) {
  const { getDefaultTargetState, getSurfaceMap } = useSurface();
  const surfaceMap = getSurfaceMap();
  let sharedState = getDefaultTargetState();

  const updateFns = {
    removeSurfaceFromTarget: (provider) => {
      const target = sharedState[0];
        const { surface } = surfaceMap.find(s => s.key === provider.surfaceKey);
        surface.forEach(s => {
            const targetSurface = target.availableSurfaces.find(as => as.key === s);
            if (targetSurface) {
                targetSurface.priority -= 1;
                if (targetSurface.priority === 0) {
                    target.availableSurfaces.splice(target.availableSurfaces.indexOf(targetSurface), 1);
                }
            }
        });
    },
    addSurfaceToTarget : (provider) => {
      const currentTarget = sharedState[0];
      //get surface from surfaceMap
      const { surface } = surfaceMap.find(s => s.key === provider.surfaceKey);
      // check if surface is already on target
      surface.forEach(s => {
          const targetSurface = currentTarget.availableSurfaces.find(as => as.key === s);
          if (targetSurface) {
              targetSurface.priority += 1;
          } else {
              currentTarget.availableSurfaces.push({
                  key: s,
                  priority: 1
              });
          }
      });
      return currentTarget
    },
    // if we need to modify the missions, register those functions here
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