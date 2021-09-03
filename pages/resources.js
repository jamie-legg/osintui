import { DatabaseIcon, HeartIcon, InformationCircleIcon, MapIcon, SearchCircleIcon, ViewListIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import useSurface from "../hooks/useSurface";

export default function Resources() {
    // an array containing a-z
    const letters = Array.from(Array(26).keys()).map((i) => String.fromCharCode(i + 65));

    const { getRawResources, parseUrl } = useSurface();
    const [resources, setResources] = useState(getRawResources());
    

    return (
        <Layout pageNo={1}>
                  <Head>
        <title>Resources / OSINTUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

                      <main className="flex-1 overflow-y-auto dark:bg-gray-900">
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


              {/* Gallery */}
              <section aria-labelledby="identification-gallery"></section>
              <p className="mb-5 text-gray-500 dark:text-gray-300">
                  Use your exposed low hanging fruit to guide the resources you should consume, then populate what you find in your documented vectors.</p>
            <nav className="h-full overflow-y-auto" aria-label="Directory">
                {letters.map((letter) => (
                    <div key={letter} className="relative">
                        <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 dark:bg-gray-900 px-6 py-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                            <h3>{letter}</h3>
                        </div>
                        <ul role="list" className="relative z-0 divide-y divide-gray-200">
                            {resources.filter(r => r.tags.length > 0 ? r.tags[0].startsWith(letter.toLowerCase()) : r.url.startsWith(letter.toLowerCase())).map((url, i) => {
                                return(
                                <li key={i} className="bg-white dark:bg-gray-900">
                                    <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-500">
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
                                            <a href={"https://" + url.url} className="focus:outline-none">
                                                {/* Extend touch target to entire panel */}
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">#{i}: {url.url}</p>
                                                <p className="text-sm text-gray-500 truncate">{url.tags.map(t => <span className="title dark:bg-white dark:text-gray-900 bg-gray-900 uppercase m-1 p-0.5 text-white">{t}</span>)}</p>
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
            </main>
        </Layout>
    )
}