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
import { useOperation, useOperationUpdate } from '../context/operation'
import ModalDialog from '../components/ModalDialog'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Home() {
  const operations = useOperation();
  const { getIdentityProviders, getOtherVectors, getDefaultTargetState } = useSurface();
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [target, setTarget] = useState(getDefaultTargetState()[0]);

  useEffect(() => {
    setTarget(operations[0])
  }, [operations])

  const [modalOpen, setModalOpen] = useState(false);


  

  const toggleModal = () => setModalOpen(!modalOpen);

  const { addIdentityToTarget, removeIdentityFromTarget } = useOperationUpdate();

  const TargetIdentityHandler = (provider, add=false, identity={}, ) => {
    setSelectedProvider(provider);
    if(!add) {
      removeIdentityFromTarget(provider)
    } else {
      toggleModal();
    }
  }

  const providerSuccess = (identity, provider) => {
    console.log('providerSuccess', identity, provider);
    addIdentityToTarget(identity, provider)
    console.log(operations[0]);
    setTarget(operations[0])
  };

    
  


  return (
    <>
      <Head>
        <title>Identities / OSINTUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <main className="flex-1 overflow-y-auto">
            <ModalDialog onSuccess={providerSuccess} provider={selectedProvider} open={modalOpen} onClose={toggleModal} />
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


              {/* Gallery */}
              <section className="pb-16" aria-labelledby="identification-gallery">
                <p className="mb-5 text-gray-500 dark:text-gray-300">
                  <LightningBoltIcon className={`inline-block h-5 w-5 mb-1 mr-5 text-yellow-400`} />
                  Configure your initial identification vectors here in order to calculate and populate your attack surface.</p>
                <ul
                  role="list"
                  className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-3xl:gap-x-8"
                >
                  {getIdentityProviders().map((provider, i) => (
                    <ProviderNode observable={target} clicked={target.identities[i] && target.identities[i].username} handler={TargetIdentityHandler} provider={provider} key={i} index={i} />
                  ))}
                  <div className="w-full block col-span-2 xl:col-span-3 2xl:col-span-5">
                <span className="title text-2xl uppercase">Implicit Providers</span>
                  </div>
                    {getOtherVectors().map((provider, i) => (
                      <ProviderNode handler={TargetIdentityHandler} provider={provider} icon={provider.icon} key={i} index={i} />
                  ))}
                </ul>
              </section>
            </div>
          </main>


    </>
  )
}
