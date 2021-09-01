import { Switch } from "@headlessui/react";
import { useState } from "react";
import useSurface from "../hooks/useSurface";
import { classNames } from "../shared/utils";

export default function ProviderNode({ handler, provider, icon = null }) {
  const { getProviderSurfaces } = useSurface();

  const registerProviderInformation = async event => {
    setClicked(!clicked)
    handler(provider, !clicked);
  }

  console.log(provider);

  const [clicked, setClicked] = useState(false);
  return (
    <li key={provider.name} className="relative">
      <p className="pl-1 text-xs xl:text-sm 3xl:text-xl block font-medium text-black dark:text-white truncate pointer-events-none">
        {provider.name}
        <span className={classNames(clicked ? "text-white dark:text-black bg-black dark:bg-white" : "bg-white dark:bg-black", "pb-1 text-black dark:text-white border-black items-center pb-1 px-2 h-8 mt-0.5  border-4 absolute right-4 cursor-pointer title text-xl")}>+{getProviderSurfaces(provider).length}</span>
      </p>
      <div
        className='group block w-full aspect-w-10 aspect-h-3 mt-4 bg-white dark:bg-black overflow-hidden'
      >
        <Switch.Group as="div" className="ml-2 flex items-center mb-3">
          <Switch
          onChange={registerProviderInformation}
            checked={clicked}
            className={classNames(
              clicked ? 'bg-gray-900 dark:bg-white' : 'bg-gray-200 dark:bg-gray-800',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-none cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:ring-white'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                clicked ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-none bg-white dark:bg-black shadow transform transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <Switch.Label as="div" className="ml-3">

          </Switch.Label>
        </Switch.Group>
        {icon ? <provider.icon className="h-10 mx-auto my-auto w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
          :
          <svg className={classNames(clicked ? "bg-gray-100" : "bg-white", "block h-10 mx-auto my-auto w-10 bg-white dark:bg-black text-black dark:text-white")} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{provider.name}</title>
            <path fill="currentColor" d={provider.iconPath} />
          </svg>
        }


      </div>
        <input onSubmit={registerProviderInformation} onClick={registerProviderInformation} placeholder={"@username"}className={classNames(clicked ? "placeholder-white text-white dark:text-black bg-black dark:bg-white" : "bg-white dark:bg-black", "dark:placeholder-white pb-1 text-black dark:text-white border-black dark:border-white w-96 items-center pb-1 px-2 h-8 placeholder-black border-4 cursor-pointer title")}></input>

    </li>
  )
}