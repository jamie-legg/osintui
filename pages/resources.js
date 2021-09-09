import { BookOpenIcon, CheckCircleIcon, DatabaseIcon, FilterIcon, HeartIcon, InformationCircleIcon, MapIcon, SearchCircleIcon, SearchIcon, SortAscendingIcon, ViewListIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import useSurface from "../hooks/useSurface";
import { useOperation } from "../context/operation";
import XButton from "../components/XButton";

export default function Resources() {
  const { operationIndex, targetIndex, operations } = useOperation();
  const [filter, setFilter] = useState("");
  
  const target = operations[operationIndex][targetIndex];

  const { surfaces } = useSurface();

  const { getRawResources, parseUrl, getVectorSurfaceMap } = useSurface();
  //? an array containing a-z
  const letters = Array.from(Array(26).keys()).map((i) => String.fromCharCode(i + 65));

  const surfaceMap = getVectorSurfaceMap();
  
  const [resources, setResources] = useState(getRawResources());
    

    useEffect(() => {   
        // make an array of all tags from the resources
        const tags = resources.map((resource) => resource.tags).flat();
        // make an array of all letters from the tags
        const letters = tags.map((tag) => tag.substring(0, 1)).filter((letter) => letter.match(/[a-z]/i));
    }, [resources]);

    const applyFilter = (filter) => {
        const filteredResources = resources.filter((resource) => resource.tags.includes(filter));
        setResources(filteredResources);
    }

    return (
        <>
                  <Head>
        <title>Resources / OSINTUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

                      <main className="flex-1 overflow-y-auto dark:bg-gray-900">
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


              {/* Gallery */}
              <section aria-labelledby="identification-gallery"></section>
              <p className="mb-5 text-gray-500 dark:text-gray-300">
                  Use your exposed vectors to guide the resources you should consume, then populate what you find in your documented vectors.</p>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <nav className="h-full overflow-y-auto" aria-label="Directory">
                {letters.map((letter) => (
                    <div key={letter} className="relative">
                        <div className="code z-10 sticky top-0 px-6 py-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                            <h3>#R-D:{operationIndex}_{letter}</h3>
                        </div>
                        <ul role="list" className="relative z-0 divide-y divide-gray-200">
                            {resources.filter(r => r.tags.length > 0 ? r.tags[0].startsWith(letter.toLowerCase()) : r.url.startsWith(letter.toLowerCase())).map((url, i) => {
                                return(
                                <li key={i} className="bg-white dark:bg-gray-900">
                                    <div className="code relative px-6 py-5 flex items-center space-x-3 dark:hover:bg-gray-900 focus-within:ring-red-500">
                                        <div className="flex-shrink-0">
                                            {url.tags.includes('search') ? (
                                            <SearchCircleIcon className="h-8 w-8 text-gray-900 dark:text-white" />
                                            ) :
                                            url.tags.includes('guide') ? (
                                                <HeartIcon className="h-8 w-8 text-gray-900 dark:text-white" />
                                                ) :
                                                url.tags.includes('list') ? (
                                                    <ViewListIcon className="h-8 w-8 text-gray-900 dark:text-white" />
                                                    ) : 
                                                    url.tags.includes('map') ? (
                                                <MapIcon className="h-8 w-8 text-gray-900 dark:text-white" /> ) : (
                                                <DatabaseIcon className="h-8 w-8 text-gray-900 dark:text-white" /> )
                                            }
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <a href={"https://" + url.url} className="group focus:outline-none">
                                                {/* Extend touch target to entire panel */}
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">#RES:{operationIndex}_{i}: <span className="cursor-pointer text-blue-600 group-hover:text-blue-800">{url.url}</span></p>
                                                <p className="text-sm text-gray-500 truncate">{url.tags.map((t,i) => <span key={i} className="title dark:bg-white dark:text-gray-900 bg-gray-900 uppercase m-1 p-0.5 text-white">{t}</span>)}</p>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            )})}
                        </ul>
                    </div>
                ))}
            </nav>
            </div>
            <div className="col-span-1 border-4 border-gray-900">
            <div className="flex justify-between text-2xl title uppercase m-2">
                <div className="border-t-0 border-l-0 border-r-0 border-solid border-4 border-gray-900">
                SEARCH
                <SearchIcon className="ml-2 inline-block w-8 h-8 text-gray-900"></SearchIcon>
                </div>
                <div>
                SORT
                <SortAscendingIcon className="ml-2 inline-block w-8 h-8 text-gray-900"></SortAscendingIcon>
                </div>
                <div>
                FILTER
                <FilterIcon className="ml-2 inline-block w-8 h-8 text-gray-900"></FilterIcon>
                </div>  
            </div>
            <div className="w-full">
                {
                
                surfaceMap.map((surface,index) => (
                    <div key={index} className="cursor-pointer transition-all hover:text-white hover:bg-gray-900 p-1 uppercase mr-2 code inline-block">
                        {surface.key}
                    </div>
                ))}
            </div>
                <div className="px-6 py-4">
                    <XButton onClick={applyFilter} icon={FilterIcon} text="Apply Target Filter"/>
                    {target.availableVectors.map((surface, index) => (
                        <div key={index} className="cursor-pointer group hover:border-gray-600 transition-all pl-3 pt-1 flex code uppercase border-dashed border-gray-300 border-4 my-2 h-12 text-2xl text-gray-900">
                            <CheckCircleIcon className="inline-block w-8 h-8 text-gray-300 group-hover:border-gray-600" />
                            <p className="ml-3">{surface.key}</p>
                            <BookOpenIcon className="ml-2 inline-block w-8 h-8 text-gray-300 group-hover:border-gray-600" />
                        </div>
                    ))}

                </div>
            </div>
            </div>
            </div>
            </main>
            </>
    )
    
}