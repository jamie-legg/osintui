import { ArrowCircleRightIcon, LightningBoltIcon, PlusSmIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Layout from '../components/Layout'
import useStorage from '../hooks/useStorage'
import { Fragment, useEffect, useRef, useState } from 'react'
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
  const { getItem } = useStorage();
  const { getIdentityProviders, getOtherSurfaces, getDefaultTarget, addSurfaceToTarget, removeSurfaceFromTarget } = useSurface();
  const [currentOperation, setCurrentOperation] = useState(getDefaultTarget());

  const storeOperations = (value) => {
    getItem('operations', (error, data) => {
      if (error) {
        console.error(error);
        return;
      }
      if (data === null) {
        setItem('operations', value);
        setCurrentOperation(value);
      }
    });
  };

  const addProviderToOperation = (provider, add=true) => {
    if(!add) {
      setCurrentOperation(removeSurfaceFromTarget(provider))
    } else {
    setCurrentOperation(addSurfaceToTarget(provider))
    }
  }

  useEffect(() => {
    const defaultTarget = getDefaultTarget();
    const storedOperations = getItem('operations');
    if(storedOperations) {
      setCurrentOperation(storedOperations)
    } else {
      setCurrentOperation(defaultTarget)
    }
  }, [])

  console.log(currentOperation)

  return (
    <div>
      <Head>
        <title>Identities / OSINTUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Layout operationHandler={storeOperations} pageNo={0}>

          <main className="flex-1 overflow-y-auto">
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


              {/* Gallery */}
              <section className="pb-16" aria-labelledby="identification-gallery">
                <p className="mb-5 text-gray-500 dark:text-gray-300">
                  <LightningBoltIcon className={`inline-block h-5 w-5 mb-1 mr-5 text-yellow-400`} />
                  Configure your initial identification vectors here in order to calculate and populate your attack surface.</p>
                <ul
                  role="list"
                  className="grid grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-3xl:gap-x-8"
                >
                  {getIdentityProviders().map((provider) => (
                    <ProviderNode handler={addProviderToOperation} provider={provider} key={provider.id} />
                  ))}
                  <div className="w-full block col-span-3 lg:col-span-3 2xl:col-span-5">
                <span className="header text-xl uppercase">Other Implicit Providers</span>
                  </div>
                    {getOtherSurfaces().map((provider) => (
                      <ProviderNode handler={addProviderToOperation} provider={provider} icon={provider.icon} key={provider.id} />
                  ))}
                </ul>
              </section>
            </div>
          </main>

        </Layout>
      </div>


    </div>
  )
}
