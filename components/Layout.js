import { Fragment, useEffect, useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
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
  UploadIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { HeartIcon, SearchIcon } from '@heroicons/react/solid'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { classNames } from '../shared/utils'
import useSurface from '../hooks/useSurface'
import CurrentTarget from './CurrentTarget'
import { useOperation } from '../context/operation'
import SelectModal from './SelectModal'

const navigation = [
  { name: 'Identities', href: '/', icon: IdentificationIcon, current: false },
  { name: 'Resources', href: '/resources', icon: BriefcaseIcon, current: false },
  { name: 'Operations', href: '/operations', icon: DocumentSearchIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Source Code', href: 'https://github.com/jamie-legg/osintui', icon: CodeIcon },
  { name: 'Support OSINTUI', href: 'https://www.buymeacoffee.com/osintjamie', icon: HeartIcon },
  { name: 'Community', href: 'https://discord.gg/HVUdnuCqwV', icon: FireIcon },
]
const tertiaryNavigation = [
  { name: 'Reset', icon: EyeOffIcon },
]


//! FOR A USER BASED FUTURE

const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]


export default function Layout({ children, changeOperations, footerRef, pageNo, onPageChange, onDataWipe }) {
  
  const { getIdentityProviders } = useSurface();
  const operations = useOperation();
  const [target, setTarget] = useState(operations[0])
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(navigation[pageNo]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
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
    navigation.forEach(item => {
      item.current = false
    })
    navigation[pageNo].current = true
    setNav(navigation)
  })


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setDarkMode(theme === 'dark')
  }

  const openTargetModal = () => {
    setTargetModalOpen(true)
  }




  return (
    <div className="relative h-screen overflow-hidden flex">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white dark:bg-gray-900 pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center">

                {theme === "dark" ? <img className="w-24 h-24" src="/osintuiwhite.png"></img> : <img className="w-24 h-24" src="/osintuigray.png"></img>}
                <p className="title text-4xl">OSINTUI<span className="header text-xs">BETA</span></p>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {navigation.map((item, i) => (
                      <Link href={item.href} key={i}>
                        <a
                          onClick={() => {
                            onPageChange(i)
                          }}
                          className={classNames(
                            item.current
                              ? 'bg-gray-200 border-gray-600 text-gray-800'
                              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group border-l-4 py-2 px-3 flex items-center text-base font-medium header uppercase dark:text-gray-300'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>

                  <div className="ml-5 mb-5 mt-auto pt-8 space-y-1 flex title">
                    {secondaryNavigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 dark:bg-gray-900 border-gray-800 dark:border-gray-50 text-gray-800 dark:text-white title'
                              : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 header',
                            'group border-l-4 py-2 px-3 flex items-center text-sm font-medium uppercase'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-800 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    {tertiaryNavigation.map((item) => (
                      <a
                        onClick={() => {
                          removeData()
                        }}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 dark:bg-gray-900 border-gray-800 dark:border-gray-50 text-gray-800 dark:text-white title'
                            : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                          'group cursor-pointer border-l-4 py-2 px-3 flex items-center text-sm font-medium'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-800 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                    <ThemeToggle callback={toggleTheme}></ThemeToggle>
                    <p className="ml-5 header">Dark Mode</p>
                  </div>

                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64 flex flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <nav className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
            <div className="flex-shrink-0 px-4 flex items-center">
              {theme === "dark" ? <img className="w-16 h-16" src="/osintuigray.png"></img> : <img className="w-16 h-16" src="/osintuiwhite.png"></img>}
              <p className="title text-5xl px-2">
                OSINTUI
              </p>
            </div>
            <div className="flex-grow mt-5 flex flex-col">
              <div className="flex-1 space-y-1">
                {navigation.map((item, i) => (
                  <Link href={item.href} key={item.name}>
                    <a
                      key={item.name}
                      onClick={() => {
                        onPageChange(i)
                      }}
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 dark:bg-white dark:text-gray-900 border-gray-800 dark:border-gray-50 text-gray-800'
                          : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                        'title group border-l-4 py-2 px-3 flex items-center text-xl font-medium uppercase dark:text-gray-300 dark:hover:text-gray-900'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-800 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
                {pageNo === 0 ? <div className="transition-all hover:bg-gray-700 dark:bg-white dark:text-gray-900 cursor-pointer bg-gray-900 text-white title px-2 py-2 m-2 uppercase text-center">ADD DATA</div>
                  : pageNo === 1 ? <div className="text-gray-900 title px-2 py-2 uppercase w-full text-center">FILTER SUGGESTED
                    <div className="text-left w-full title">SEARCH TAGS</div>
                    <div className="w-full">
                      {target.availableSurfaces ? target.availableSurfaces.map((item) => (
                        <div className="inline-block items-center justify-between px-2 py-2 bg-gray-900">{item.name}</div>
                      )) : null}
                    </div>
                    <div className="text-left w-full title">SUGGESTED VECTORS</div>
                  </div> :
                    <div className="cursor-pointer bg-gray-900 text-white title px-2 py-2 uppercase">NEW OPERATION</div>}
              </div>

            </div>
            {secondaryNavigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  key={item.name}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 dark:bg-gray-900 border-gray-800 dark:border-gray-50 text-gray-800 dark:text-white title'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-xl',
                    'group border-l-4 py-2 px-3 flex items-center text-sm font-medium'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-800 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </Link>
            ))}
            {tertiaryNavigation.map((item) => (
              <a
                onClick={() => {
                  removeData()
                }}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 dark:bg-gray-900 border-gray-800 dark:border-gray-50 text-gray-800 dark:text-white title'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                  'group cursor-pointer border-l-4 py-2 px-3 flex items-center text-sm font-medium'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-800 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
            <div className="ml-2 flex w-full text-gray-600 hover:text-gray-900 hover:bg-gray-50">

              <ThemeToggle callback={toggleTheme}></ThemeToggle>
              <p className="ml-5 text-sm font-medium text-gray-600">Dark Mode</p>
            </div>
          </nav>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col dark:bg-gray-900">
        <SelectModal providers={providers} target={target} open={selectModalOpen} onChange={setTarget} onClose={toggleSelectModal}></SelectModal>
        <div className="w-full flex items-center text-3xl py-5 title ml-5 uppercase">
          <button
            type="button"
            className="border-r mr-4 border-gray-900 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-8 w-8" aria-hidden="true" />
          </button>
          <span className="border-r-4 border-gray-900 pr-4">{navigation[pageNo].name}</span>
          <span className="hidden xl:block ">&nbsp;
            <span onClick={() => toggleSelectModal()} className="pl-4 pr-3 code text-xl py-2 border-dashed border-4 dark:hover:border-gray-300 dark:border-gray-600 hover:border-gray-300 border-gray-100 rounded-xl cursor-pointer">{target.username}</span>
          </span>
          <span className="items-center h-8 bg-gray-900 pt-0.5 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2">
            +{target.vectors}
          </span>
          <div className="relative ml-10 lg:hidden">
            <EyeIcon onClick={toggleSelectModal} className="right-0 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" aria-hidden="true" />
          </div>

          <div className="hidden lg:flex absolute right-10 place-self-end items-end text-3xl title uppercase">Current_Op
            <UploadIcon className="h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
            <DownloadIcon className="h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xl px-2 ml-2" />
          </div>

        </div>
        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">

            {children}
            {/* Current target sidebar */}
            <aside className="hidden w-96 bg-white dark:bg-gray-900 p-8 border-l border-gray-200 overflow-y-auto lg:block">
              <CurrentTarget currentTarget={target} />
            </aside>

          </div>
        </div>
        <footer className="flex items-center justify-center w-full h-16 border-t">
          <ArrowNarrowRightIcon className="text-gray-500 inline-block h-5 w-5 ml-5" />
          <div className="w-full ml-5 h-6 dark:bg-gray-900 text-gray-500">

            <input ref={footerRef} className="w-full h-6 border-none bg-white dark:bg-gray-900 text-gray-500" type="text" placeholder="Move fast. Use commands. !help for more." />


          </div>
        </footer>
      </div>
    </div>
  )
}
