import { Fragment, useEffect, useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  ClockIcon,
  CodeIcon,
  CogIcon,
  DocumentSearchIcon,
  DownloadIcon,
  EyeIcon,
  EyeOffIcon,
  FireIcon,
  HomeIcon,
  IdentificationIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  SelectorIcon,
  SwitchVerticalIcon,
  TerminalIcon,
  UploadIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { HeartIcon, SearchIcon, 
  IdentificationIcon as SolidIdentificationIcon,
BriefcaseIcon as SolidBriefcaseIcon,
ClockIcon as SolidClockIcon, 
PlusIcon} from '@heroicons/react/solid'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { classNames } from '../shared/utils'
import useSurface from '../hooks/useSurface'
import CurrentTarget from './CurrentTarget'
import { useOperation, useOperationUpdate } from '../context/operation'
import SelectModal from './SelectModal'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'
import InfoModal from './InfoModal'

const navigation = {
  primary: [
    { name: 'Identities', href: '/', icon: IdentificationIcon, currentIcon: SolidIdentificationIcon, current: false },
    { name: 'Resources', href: '/resources', icon: BriefcaseIcon, currentIcon: SolidBriefcaseIcon, current: false },
    { name: 'Operations', href: '/operations', icon: ClockIcon, currentIcon: SolidClockIcon, current: false },
  ],
  secondary: [
    { name: 'Source Code', href: 'https://github.com/jamie-legg/osintui', icon: CodeIcon },
    { name: 'Support OSINTUI', href: 'https://www.buymeacoffee.com/osintjamie', icon: HeartIcon },
    { name: 'Community', href: 'https://discord.gg/HVUdnuCqwV', icon: FireIcon },
  ],
  tertiary: [
    { name: 'Help', icon: QuestionMarkCircleIcon },
    { name: 'Reset', icon: EyeOffIcon },
  ]
}


//! FOR A USER BASED FUTURE

const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]


export default function Layout({ children, footerRef, pageNo, onPageChange, onDataWipe }) {
  
  const { getIdentityProviders, getIdentityIcon } = useSurface();
  const { operationIndex, targetIndex, operations} = useOperation();
  const { setDefaultProvider, newTargetInOperation } = useOperationUpdate();
  const [target, setTarget] = useState(operations[operationIndex][targetIndex])
  const changeDefaultIdentity = (id) => {
    setTarget(setDefaultProvider(id))
  }

  const addNewTarget = () => {
    const freshTarget = newTargetInOperation()
    setTarget(freshTarget)
  }


  const [nav, setNav] = useState(navigation.primary[pageNo]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const [targetModalOpen, setTargetModalOpen] = useState(false);
  const providers = getIdentityProviders();

  const removeData = () => {
    onDataWipe()
  }

  const toggleSelectModal = () => {
    setSelectModalOpen(!selectModalOpen)
  }

  


  useEffect(() => {
    //turn current off on each key of navigation
    navigation.primary.forEach(item => {
      item.current = false
    })
    navigation.primary[pageNo].current = true
    setNav(navigation)
  })

  return (
    <div className="relative h-screen overflow-hidden flex">
      <MobileSidebar open={sidebarOpen} onPageChange={onPageChange} navigation={navigation} pageNo={pageNo} target={target}  />

      {/* Static sidebar for desktop */}
      <DesktopSidebar onPageChange={onPageChange} navigation={navigation} pageNo={pageNo} target={target} />               

      {/* Content area */}
      <div className="flex-1 flex flex-col dark:bg-gray-900">
        <InfoModal isOpen={infoOpen} />
        <SelectModal providers={providers} target={target} open={selectModalOpen} onClose={toggleSelectModal} onChange={changeDefaultIdentity}></SelectModal>
        <div className="w-full flex items-center text-3xl py-5 title ml-5 uppercase">
          <button
            type="button"
            className="border-r mr-4 border-gray-900 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-8 w-8" aria-hidden="true" />
          </button>
          <span className="border-r-4 border-gray-900 pr-4">{pageNo === 0? "Identification Vectors" : pageNo === 1? "Research Resources" : "Historical Operations"}</span>
          <span className="hidden xl:block ">&nbsp;
            <span onClick={() => toggleSelectModal()} className="pl-4 mt-0.5 pr-3 code text-xl py-2 border-dashed border-4 dark:hover:border-gray-300 dark:border-gray-600 hover:border-gray-300 border-gray-100 rounded-xl cursor-pointer">
            {target.defaultProviderKey.length > 0 ? 
            <svg className={"inline-block h-6 w-6 pb-1 text-gray-900"} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{target.defaultProviderKey}</title>
            <path fill="currentColor" d={getIdentityIcon(target.defaultProviderKey)} />
          </svg>: null}
          {target.username ? target.username : "target_username"}</span>
          </span>
          <span className="items-center h-8 bg-gray-900 pt-0.5 code dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2">
            +{target.availableVectors.length}
          </span>
          <div className="relative ml-10 lg:hidden">
            <EyeIcon onClick={toggleSelectModal} className="right-0 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" aria-hidden="true" />
          </div>

          <div className="border-4 border-gray-900 p-2 hidden lg:flex absolute right-10 place-self-end items-end text-3xl code uppercase">
            #OP-C:{operationIndex}_{targetIndex}
            <PlusIcon onClick={addNewTarget} className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
            <SelectorIcon className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
            <UploadIcon className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
            <DownloadIcon className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
          </div>

        </div>
        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">

            {children}
            {/* Current target sidebar */}
            <aside className="hidden w-96 bg-white dark:bg-gray-900 p-8 overflow-y-auto lg:block">
              <CurrentTarget parentTarget={target} />
            </aside>

          </div>
        </div>
        <footer className="flex items-center justify-center w-full h-16 border-t">
          <TerminalIcon className="text-gray-500 inline-block h-8 w-8 ml-5" />
          <div className="w-full ml-5 h-6 dark:bg-gray-900 text-gray-500">

            <input ref={footerRef} className="w-full h-6 border-none bg-white dark:bg-gray-900 text-gray-500" type="text" placeholder="Move fast. Use commands. !help for more." />


          </div>
        </footer>
      </div>
    </div>
  )
}
