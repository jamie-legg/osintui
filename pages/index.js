import { ArrowCircleRightIcon, LightningBoltIcon, PlusSmIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  CogIcon,
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  MenuAlt2Icon,
  PhotographIcon,
  PlusIcon as PlusIconOutline,
  UserGroupIcon,
  ViewGridIcon as ViewGridIconOutline,
  XIcon,
} from '@heroicons/react/outline'
import {
  PencilIcon,
  PlusIcon as PlusIconSolid,
  SearchIcon,
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from '@heroicons/react/solid'
import CurrentTarget from '../components/CurrentTarget'
import useSurface from '../hooks/useSurface'
import ProviderNode from '../components/ProviderNode'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Home() {
  const category="Home"
  const [ theme, setTheme ] = useState('yellow');
  const { getIdentityProviders, getOtherSurfaces, getCurrentTarget, addSurfaceToTarget } = useSurface();
  const [currentOperation, setCurrentOperation] = useState(getCurrentTarget());
  const addProviderToOperation = (provider) => {
    setCurrentOperation(addSurfaceToTarget(provider))
  }
  return (
    <div>
      <Head>
        <title>{category} / OSINTUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Layout>

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Main content */}
        <div className="flex-1 flex items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


              {/* Gallery */}
              <section className="pb-16" aria-labelledby="identification-gallery">
                <p className="mb-5 text-gray-500 dark:text-gray-300">
                  <LightningBoltIcon onClick={() => setTheme('blue')}className={`inline-block h-8 w-8 mr-5 text-${theme}-400`} />
                  Configure your initial identification vectors here in order to calculate and populate your attack surface.</p>
                <ul
                  role="list"
                  className="grid grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6xl:gap-x-8"
                >
                  {getIdentityProviders().map((provider) => (
                    <ProviderNode handler={addProviderToOperation} provider={provider} key={provider.id} />
                  ))}
                  <div className="w-full block col-span-3 lg:col-span-5">
                <span className="header text-xl uppercase">Other Implicit Providers</span>
                  </div>
                    {getOtherSurfaces().map((provider) => (
                    <li key={provider.name} className="relative">
                      <div
                        className={classNames(
                          provider.name
                            ? 'ring-2 ring-offset-2 ring-gray-500'
                            : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-gray-500',
                          'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                        )}
                      >
                        <provider.icon className="h-10 mx-auto my-auto w-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        </provider.icon>
                        <button type="button" className="absolute inset-0 focus:outline-none">
                          <span className="sr-only">View details for {provider.name}</span>
                        </button>
                      </div>
                      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                        {provider.name}
                      </p>
                      <p className="block text-sm font-medium text-gray-500 pointer-events-none">{provider.name.length}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>

          {/* Current target sidebar */}
          <aside className="hidden w-96 bg-white dark:bg-black p-8 border-l border-gray-200 overflow-y-auto lg:block">
            <CurrentTarget operation={currentOperation}/>
          </aside>
        </div>
      </div>
        </Layout>
      </div>


    </div>
  )
}
