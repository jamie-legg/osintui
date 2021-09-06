import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { useTheme } from "next-themes";
import { Fragment, useState } from "react"
import Link from 'next/link'
import { classNames } from "../shared/utils";
import ThemeToggle from "./ThemeToggle";

export default function MobileSidebar({open, navigation, secondaryNavigation, tertiaryNavigation, pageNo, target}) {
    const [sidebarOpen, setSidebarOpen] = useState(open)
    const { theme, setTheme } = useTheme();

    return(
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
                    {navigation.primary.map((item, i) => (
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
                    {navigation.secondary.map((item) => (
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
                    {navigation.tertiary.map((item) => (
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
                    <ThemeToggle></ThemeToggle>
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
    )
}