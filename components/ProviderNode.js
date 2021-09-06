import { Switch } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import useSurface from "../hooks/useSurface";
import { classNames } from "../shared/utils";

export default function ProviderNode({ handler, provider, icon = null }) {
  const { getProviderSurfaces } = useSurface();

  const registerProviderInformation = async event => {
    setClicked(!clicked)
    handler(provider, !clicked);
  }

  const [clicked, setClicked] = useState(false);
  return (
    <div 
    onClick={registerProviderInformation}
    key={provider.name} className="cursor-pointer group grid grid-cols-3 h-48 w-48 border-dashed border-4 dark:hover:border-gray-300 dark:border-gray-600 hover:border-gray-300 border-gray-100 rounded-xl p-3">
      <div className={"row col-span-1"}>
        {icon ? <provider.icon className="h-10 mx-auto my-auto w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
            :
            <svg className={classNames(clicked ? "bg-white" : "bg-white", "block h-10 w-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white")} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{provider.name}</title>
              <path fill="currentColor" d={provider.iconPath} />
            </svg>
          }
      </div>
      <div className="row col-span-2">
        <div className="text-xl title font-medium text-gray-900 dark:text-white text-right">{provider.name}</div>
      </div>
      <div className="row col-span-3">
        <PlusIcon className="mx-auto w-12 h-12 text-center text-white group-hover:text-gray-300 dark:border-gray-900 hover:border-gray-300 "></PlusIcon>
      </div>
      <div className={classNames(clicked ? 
        "text-white dark:text-gray-900 bg-gray-900 dark:bg-white" : 
        "bg-white dark:bg-gray-900", 
        "text-gray-900 col-span-2 dark:text-white border-gray-900 dark:border-white title text-3xl w-10 h-10 px-2.5 mt-2 pt-0.5")}>
          {getProviderSurfaces(provider).length}</div>
      <Switch.Group as="div" className="flex col-span-1 items-center">
          <Switch
          onChange={registerProviderInformation}
            checked={clicked}
            className={classNames(
              clicked ? 'bg-gray-900 dark:bg-white' : 'bg-white dark:bg-gray-900',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-none cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:ring-white'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                clicked ? 'translate-x-5' : 'translate-x-0',
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