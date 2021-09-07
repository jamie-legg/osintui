import { Switch } from "@headlessui/react";
import { ExternalLinkIcon, EyeOffIcon, PlusIcon, EyeIcon as EyeOutline } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useOperation } from "../context/operation";
import useSurface from "../hooks/useSurface";
import { classNames } from "../shared/utils";

export default function ProviderNode({ handler, provider, implicit=false, icon = null, index }) {
  const {operations, operationIndex, targetIndex} = useOperation();
  const [target, setTarget] = useState(operations[operationIndex][targetIndex]);

  const [isClicked, setIsClicked] = useState(!implicit && target.identities[index] && target.identities[index].username);
  const [isActive, setIsActive] = useState(!implicit && target.identities[index] && target.identities[index].active);
  const [isDefault, setIsDefault] = useState(!implicit && target.identities[index] && target.identities[index].default);
  
  useEffect(() => {
    if(!implicit && target.identities[index] && target.identities[index].default) {
      setIsDefault(true);
    }
  }, [isClicked]);

  const { getProviderSurfaceVectors } = useSurface();
  
  
  
  const registerProviderInformation = async event => {
    //? we always want the opposite action of current click state
    handler(provider, !isClicked);

    setIsClicked(true);
    
    
    setIsClicked(!isClicked)
  }

  return (
    <div 
    onClick={registerProviderInformation}
    key={index}
    className={classNames(isDefault ? "border-red-600" : isClicked ? "rounded-none border-gray-900 border-solid dark:border-white" : "dark:hover:border-gray-300 dark:border-gray-600 hover:border-gray-300 border-gray-100rounded-xl border-dashed","cursor-pointer group grid grid-cols-3 h-48 w-48 border-4 p-3")}>
      <div className={"row col-span-1"}>
        {icon ? <provider.icon className="h-10 mx-auto my-auto w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
            :
            <svg className={classNames(isClicked ? "bg-white" : "bg-white", "block h-10 w-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white")} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{provider.name}</title>
              <path fill="currentColor" d={provider.iconPath} />
            </svg>
          }
      </div>
      <div className="row col-span-2">
        <div className={classNames( isClicked? "hover:bg-gray-900 z-40 hover:text-white" : "", "text-xl title font-medium text-gray-900 dark:text-white text-right")}>{provider.name}{isClicked ? <ExternalLinkIcon className="inline-block w-5 h-5 ml-1" /> : null}</div>
        {isClicked? <div className="text-gray-600 text-right code text-sm">{target.identities[index] && target.identities[index].username ? "@" + target.identities[index].username : "<Configuring>"}</div>
        : <div className="text-sm code font-medium text-gray-600 dark:text-white text-right">{icon? provider.placeholder : "@username"}</div>}
      </div>
      <div className="row col-span-3">
      {isClicked && isDefault? <div className="uppercase code text-xs mx-auto w-14 bg-red-600 text-white text-center">Default</div> : null}
      {isClicked?
        <p
        className="mx-auto pl-1 w-14 text-white dark:text-gray-900 bg-gray-900 dark:bg-white code text-3xl h-10"
        >#{icon? "I" : "V"}{index}</p> : <PlusIcon className="mx-auto w-12 h-12 text-center text-white dark:text-gray-900 group-hover:text-gray-300 dark:border-gray-900 hover:border-gray-300 dark:hover:text-gray-300"></PlusIcon>}
        
      </div>
      <div className={classNames(isClicked ? 
        "text-white dark:text-gray-900 bg-gray-900 dark:bg-white" : 
        "bg-white dark:bg-gray-900", 
        "text-gray-900 dark:text-white border-gray-900 dark:border-white title text-3xl w-10 h-10 px-2.5 mt-2 pt-0.5")}>
          {getProviderSurfaceVectors(provider).length}</div>
          <div className="col-span-1">
          <div className={classNames(isClicked ?
              "block" :
              "hidden" , "dark:bg-gray-900", "cursor-pointer group")}>
                <EyeIcon className="inline-block group-hover:hidden h-8 w-8 mt-2.5 ml-2.5 z-30" />
                <EyeOutline className="hidden group-hover:inline-block h-8 w-8 mt-2.5 ml-2.5 z-30" />
            </div>
          </div>
            
            


      <Switch.Group as="div" className="ml-1 flex col-span-1 items-center">
          <Switch
          onChange={registerProviderInformation}
            checked={isClicked}
            className={classNames(
              isClicked ? 'bg-gray-900 dark:bg-white border-gray-900 border-solid' : 'bg-white dark:bg-gray-900',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-gray-200 border-dashed rounded-none cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-gray-900 dark:ring-white'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                isClicked ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-none bg-white dark:bg-gray-900 shadow transform transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <Switch.Label as="div" className="ml-3">

          </Switch.Label>
        </Switch.Group>
    </div>
  )
}