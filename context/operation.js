import { createContext, useContext } from 'react';
import useSurface from '../hooks/useSurface';

const AppContext = createContext();

export function OperationWrapper({ children }) {
    const { getDefaultTargetState } = useSurface();
    let sharedState = getDefaultTargetState();

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useOperation() {
  return useContext(AppContext);
}