import { AES, enc } from 'crypto-js';
import { createContext, useContext, useEffect, useState } from 'react';
import useStorage from '../hooks/useStorage';
import useSurface from '../hooks/useSurface';

const OperationContext = createContext();
const OperationUpdateContext = createContext();

export function OperationWrapper({ children }) {
  const { getItem } = useStorage();
  const { getDefaultOperationState, getDefaultTarget, getVectorSurfaceMap, getIdentityProviders, getPrivateKey } = useSurface();
  const vectorMap = getVectorSurfaceMap();
  const providers = getIdentityProviders();
  const [ globalOps, setGlobalOps ] = useState(getDefaultOperationState());

  const currentTarget = globalOps.operations[globalOps.operationIndex][globalOps.targetIndex];

  useEffect(() => {
    const stored_key = localStorage.getItem('private_key');
    if (stored_key) {
      setGlobalOps(globalOps => ({ ...globalOps, key:stored_key}));
    }
    else {
      getPrivateKey().then(key => {
        setGlobalOps(globalOps => ({ ...globalOps, key}));
        localStorage.setItem('private_key', key);
      });
    }
      
    const stored_ops = getItem('operations');
    if (stored_ops) {
      setGlobalOps(stored_ops);
    }
    else {
      
    }
  }, []);

  const cipherText = (text) => { 
    const encrypted = AES.encrypt(text, globalOps.key).toString();
    return encrypted;
  }

  const decipherText = (encrypted) => {
    const bytes = AES.decrypt(encrypted, globalOps.key);
    const decrypted = bytes.toString(enc.Utf8);
    return decrypted;
  }

  const getNextTargetId = () => {
    let high_id = 0;
    for (const target of globalOps.operations[globalOps.operationIndex])
      if (target.id > high_id)
        high_id = target.id;
    return high_id + 1;
  }

  const updateFns = {

    toggleCryptography: (encrypt) => {
      if(encrypt) {
      const newOps = { ...globalOps, encrypted:true };
      newOps.operations = cipherText(JSON.stringify(newOps.operations));
      setGlobalOps({...newOps});
      }
      else {
        const newOps = { ...globalOps, encrypted:false };
        newOps.operations = JSON.parse(decipherText(newOps.operations));
        setGlobalOps({...newOps});
      }
    },
    addImageToTarget: (image) => {
      const newOps = { ...globalOps };
      let newTarget = newOps.operations[globalOps.operationIndex][globalOps.targetIndex]
      newTarget.profilePicUrl = image;
      const vectorImages = newTarget.vectors.find(v => v.key === "images")
      vectorImages? vectorImages.data.push(image) : newTarget.vectors.push({ key: "images", data: [image] });
      const { surface } = vectorMap.find(s => s.key === "images");
      surface.forEach(s => {
        const targetSurface = newTarget.availableVectors.find(as => as.key === s);
        if (targetSurface) {
            targetSurface.priority += 1;
        } else {
          newTarget.availableVectors.push({
                key: s,
                priority: 1
            });
        }
      });
      setGlobalOps({...newOps});
    },
    newTargetInOperation: () => {
      const newTarget = getDefaultTarget();
      newTarget.id = getNextTargetId();
      globalOps.operations[globalOps.operationIndex].push(newTarget);
      globalOps.targetIndex += 1;
      setGlobalOps({...globalOps});
      return newTarget;
    },
    newOperation: () => {
      globalOps.operations.push([getDefaultTarget()]);
      setGlobalOps({...globalOps});
    },

    addIdentityToTarget: (identity, provider ) => {
      const { surface } = vectorMap.find(s => s.key === provider);
      // get index of provider from identity providers
      const providerIndex = providers.findIndex(p => p.surfaceKey === provider);
      const shouldBeDefault = !(currentTarget.identities.find(i => i && i.default === true));
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
    //? FOR IDENTITY VECTORS, ONLY ADD INDEX 0 - ID IS
    const vector = currentTarget.vectors.find(v => v.key === surface[0])
    vector? vector.data.push(identity) : currentTarget.vectors.push({ key: surface[0], data: [identity] });
    globalOps.operations[globalOps.operationIndex][globalOps.targetIndex] = currentTarget;
    setGlobalOps({...globalOps});
    return currentTarget;
    },
    removeIdentityFromTarget: (provider) => {
      const identity = currentTarget.identities.find(i => i && i.platform === provider.surfaceKey);
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
      setGlobalOps({...globalOps});
      return currentTarget;
    },
    setDefaultProvider: (providerKey) => {
      currentTarget.identities.forEach(i => i.default = false);
      const identity = target.identities.find(i => i.platform === providerKey);
      if(identity) identity.default = true;
      setGlobalOps({...globalOps});
      return identity;
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