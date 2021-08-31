import { Fragment, useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import {
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  CogIcon,
  DocumentSearchIcon,
  DownloadIcon,
  EyeIcon,
  HomeIcon,
  IdentificationIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  UploadIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import ThemeToggle from './ThemeToggle'
import { useTheme } from 'next-themes'
import { classNames } from '../shared/utils'

const navigation = [
  { name: 'Identities', href: '#', icon: IdentificationIcon, current: true },
  { name: 'Resources', href: '#', icon: BriefcaseIcon, current: false },
  { name: 'Operations', href: '#', icon: DocumentSearchIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Logout', href: '#', icon: CogIcon },
]
const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]


export default function Layout({ children }) {
  const [hash, setHash] = useState('')

  //convert character to its alphabet index position
  const getIndex = (char) => {
    return (char.charCodeAt(0) - 96)
  }

  const encrypt = (text) => {
    let encrypted = ''
    for (let i = 0; i < text.length; i++) {
      let temp = (getIndex(text[i]) ** 2) / 2
      
      encrypted += temp % 2 === 0 ? getIndex(text[i])**2/2 + " " : ((getIndex(text[i]))**2)/2-.5 + "X "
    }
    return encrypted
  }
  
  
  const {theme, setTheme} = useTheme()
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setDarkMode(theme === 'dark')
  }
  const [target, setTarget] = useState({username:"@jamie_legg"})
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)

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
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
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
            <div className="relative max-w-xs w-full bg-white dark:bg-black pt-5 pb-4 flex-1 flex flex-col">
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
                <p className="title text-4xl">OSINTUI<span className="header">BETA</span></p>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-200 border-gray-600 text-gray-800'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group border-l-4 py-2 px-3 flex items-center text-base font-medium header'
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
                    ))}
                  </div>
                  
                  <div className="ml-5 mb-5 mt-auto pt-8 space-y-1 flex">
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
          <nav className="bg-white dark:bg-black border-r border-gray-200 dark:border-gray-700 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
            <div className="flex-shrink-0 px-4 flex items-center">
              <div className="flex-shrink-0">
                  <p className="title text-3xl">
                      OSINTUI<span className="header">BETA</span>
                  </p>
              </div>
            </div>
            <div className="flex-grow mt-5 flex flex-col">
              <div className="flex-1 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 dark:bg-gray-900 border-gray-800 dark:border-gray-50 text-gray-800 dark:text-white title'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 header',
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
                ))}
              </div>
            </div>
            <div className="ml-2 flex w-full">
              <ThemeToggle callback={toggleTheme}></ThemeToggle>
                <p className="ml-5 header">Dark Mode</p>
            </div>
          </nav>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        
        <div className="w-full flex items-center text-3xl py-5 title ml-5 uppercase">
        <button
              type="button"
              className="border-r mr-4 border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          {navigation[0].name} |&nbsp;
          <span className="header text-xl">{target.username}</span>
          <span className="items-center h-8 bg-black pt-0.5 dark:bg-white text-white dark:text-black text-xl px-2 ml-2">+34</span>
          <div className="relative ml-10 lg:hidden">
            <EyeIcon className="right-0 h-8 bg-black pt-0.5 dark:bg-white text-white dark:text-black text-xl px-2 ml-2" aria-hidden="true" />
          </div>

          <div className="hidden lg:flex absolute right-10 place-self-end items-end text-3xl title uppercase">Current_Op
          <UploadIcon className="h-8 bg-black dark:bg-white text-white dark:text-black text-xl px-2 ml-2" />
          <DownloadIcon className="h-8 bg-black dark:bg-white text-white dark:text-black text-xl px-2 ml-2" />
          </div>

        </div>

        {children}
        <footer className="flex items-center justify-center w-full h-24 border-t">
        <div className="w-full h-8 dark:bg-gray-900 text-gray-200">
          Move fast. Use commands. <code>!help</code> for more.
        </div>
      </footer>
      </div>
    </div>
  )
}
