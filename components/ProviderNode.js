import { useState } from "react";
import useSurface from "../hooks/useSurface";
import { classNames } from "../shared/utils";

export default function ProviderNode({ handler, provider }) {


    const registerProviderInformation = async event => {
        handler(provider);
    }

    const [clicked, setClicked] = useState(false);
    return(
        <li key={provider.name} className="relative">
        <form onSubmit={registerProviderInformation}>
        <div
          onClick={() => {
              registerProviderInformation();
              setClicked(!clicked)}}
          className={classNames(
            clicked
              ? 'ring-2 ring-offset-2 ring-black'
              : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500',
            'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-white dark:bg-black overflow-hidden'
          )}
        >
            <div className={classNames( clicked? "bg-red-500":"bg-white dark:bg-black","relative w-5 h-5 mt-2 ml-2 rounded-md border-4 border-red-300")}>
                
            </div>
          <svg className="h-10 mx-auto my-auto w-10 bg-white dark:bg-black text-black dark:text-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{provider.name}</title>
            <path fill="currentColor" d={provider.iconPath}/>
          </svg>
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {provider.name}</span>
          </button>
        </div>
        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          {provider.name}
        </p>
        <p className="block text-sm font-medium text-gray-500 pointer-events-none">{provider.name.length}</p>
      </form>
      </li>
    )
}