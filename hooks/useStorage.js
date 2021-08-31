const useStorage = () => {
    const isBrowser = (() => typeof window !== 'undefined')();
  
    const getItem = (key, type) => {
      const storageType = `${type ?? 'session'}Storage`;
      return isBrowser ? window[storageType][key] : '';
    };
  
    return {
      getItem,
    };
  };
  
  export default useStorage;