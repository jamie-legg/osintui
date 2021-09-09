import { Children, cloneElement, Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Listbox, Switch, Transition } from '@headlessui/react'
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
  FolderOpenIcon,
  HomeIcon,
  IdentificationIcon,
  MenuAlt2Icon,
  PencilIcon,
  QuestionMarkCircleIcon,
  SelectorIcon,
  SwitchVerticalIcon,
  TerminalIcon,
  UploadIcon,
  UsersIcon,
  LightningBoltIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  HeartIcon, SearchIcon,
  IdentificationIcon as SolidIdentificationIcon,
  BriefcaseIcon as SolidBriefcaseIcon,
  ClockIcon as SolidClockIcon,
  PlusIcon
} from '@heroicons/react/solid'
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
import OpBox from './OpBox'
import SelectBox from './SelectBox'

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
  const { operationIndex, targetIndex, operations } = useOperation();
  const { theme, setTheme } = useTheme();

  const [ vectorIndex, setVectorIndex ] = useState(operations[operationIndex][targetIndex].vectors.length);

  const { setDefaultProvider, newTargetInOperation } = useOperationUpdate();

  const [target, setTarget] = useState(operations[operationIndex][targetIndex])

  const [opBoxOpen, setOpBoxOpen] = useState(false)

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
  const providers = getIdentityProviders();

  const removeData = () => {
    onDataWipe()
  }

  const toggleSelectModal = () => {
    setSelectModalOpen(!selectModalOpen)
  }

  const toggleOpBox = () => {
    setOpBoxOpen(!opBoxOpen)
  }




  useEffect(() => {
    //turn current off on each key of navigation
    navigation.primary.forEach(item => {
      item.current = false
    })
    navigation.primary[pageNo].current = true
    setNav(navigation)
  })

  console.log("target", target);

  return (
    <div className="relative h-screen overflow-hidden flex">

      <MobileSidebar open={sidebarOpen} onPageChange={onPageChange} navigation={navigation} pageNo={pageNo} target={target} />

      {/* Static sidebar for desktop */}
      <DesktopSidebar onPageChange={onPageChange} navigation={navigation} pageNo={pageNo} target={target} />

      {/* Content area */}
      <div className="flex-1 flex flex-col dark:bg-gray-900">
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
          <span className="border-r-4 border-gray-900 pr-4">{pageNo === 0 ? "Identification Vectors" : pageNo === 1 ? "Research Resources" : "Historical Operations"}</span>
          <span className="hidden xl:block ">&nbsp;
            <span onClick={() => toggleSelectModal()} className="pl-4 mt-0.5 pr-3 code text-xl py-2 border-dashed border-4 dark:hover:border-gray-300 dark:border-gray-600 hover:border-gray-300 border-gray-100 rounded-xl cursor-pointer">
              {target.defaultProviderKey.length > 0 ?
                <svg className={"inline-block h-6 w-6 pb-1 text-gray-900"} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>{target.defaultProviderKey}</title>
                  <path fill="currentColor" d={getIdentityIcon(target.defaultProviderKey)} />
                </svg> : null}
              {target.username ? target.username : "target_username"}</span>
          </span>
          <span className="items-center h-8 bg-gray-900 pt-0.5 code dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2">
            +{target.availableVectors.length}
          </span>
          <div className="relative ml-10 lg:hidden">
            <EyeIcon onClick={toggleSelectModal} className="right-0 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" aria-hidden="true" />
          </div>
          <div>
          <Listbox value={target} onChange={setTarget}>
            <OpBox>
              <span className="mr-2">#OP:{operationIndex}_{targetIndex}</span>
              {theme === "dark" ? <img className="w-10 h-10" src="/osintuigray.png"></img> : <img className="w-10 h-10" src="/osintuiwhite.png"></img>}
              <PlusIcon onClick={addNewTarget} className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
              <Listbox.Button>
                <SelectorIcon onClick={() => setOpBoxOpen(!opBoxOpen)} className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
              </Listbox.Button>
              <UploadIcon className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
              <DownloadIcon className="h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
            </OpBox>
            <Transition
              show={opBoxOpen}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {operations.map((operation, index) => (
                  <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    classNames(
                    active?'text-white bg-indigo-600': 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9'
                    )
                  }
                  value={operation}>
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={operation.profilePicUrl} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                          <span
                            className={classNames(selected?'font-semibold': 'font-normal', 'ml-3 block truncate')}
                          >
                          {operation.name}
                          </span>
                        </div>

                        {selected?(
                          <span
                          className={classNames(
                          active?'text-white': 'text-indigo-600',
                          'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ): null}
                      </>
                  )}
                </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
          </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">

            {/* Main content */}
            <div className="flex-1 flex items-stretch overflow-hidden">

              {children}

              {/* Current target sidebar */}
              <aside className="hidden w-96 bg-white dark:bg-gray-900 p-8 overflow-y-auto lg:block">
                <CurrentTarget />
              </aside>

            </div>
          </div>
          <footer className="flex items-center justify-center w-full h-16 border-t">
            <TerminalIcon className="text-gray-500 inline-block h-8 w-8 ml-5" />
            <div className="w-full ml-5 h-6 dark:bg-gray-900 text-gray-500">

              <input ref={footerRef} className="w-full h-6 border-none bg-white dark:bg-gray-900 text-gray-500" type="text" placeholder="Move fast. Use commands. !help for more." />


            </div>
            <OpBox>
            <div className="code text-3xl">
              #V:{vectorIndex}_{vectorIndex === 0? "ready" : target.vectors[vectorIndex]}
            </div>
            <LightningBoltIcon onClick={() => toggleNameEdit()} className="inline-block mt-1 h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-1" />
            <PencilIcon className="inline-block mt-1 h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
            <FolderOpenIcon className="inline-block mt-1 h-8 cursor-pointer hover:bg-gray-700 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
            </OpBox>

          </footer>
        </div>
      </div>
      )
}
