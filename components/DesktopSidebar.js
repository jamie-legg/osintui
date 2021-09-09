import { useTheme } from "next-themes";
import Link from "next/link"
import { useOperation } from "../context/operation";
import { classNames } from "../shared/utils"
import ThemeToggle from "./ThemeToggle"

export default function DesktopSidebar({ onPageChange, navigation, secondaryNavigation, tertiaryNavigation, pageNo, target }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="w-64 flex flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <nav className="bg-white dark:bg-gray-900 border-r-4 border-gray-900 dark:border-gray-700 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
          <div className="flex-shrink-0 px-4 flex items-center">
            {theme === "dark" ? <img className="w-16 h-16" src="/osintuigray.png"></img> : <img className="w-16 h-16" src="/osintuiwhite.png"></img>}
            <p className="title text-5xl px-2 pb-0 border-l-4 border-blue-600">
              OSINTUI<span className="text-sm mb-4 border-b-4 border-red-600">alpha</span>
            </p>
          </div>
          <div className="flex-grow mt-5 flex flex-col">
            <div className="flex-1 space-y-1">
              {navigation.primary.map((item, i) => (
                <Link href={item.href} key={i}>
                  <a
                    key={i}
                    onClick={() => {
                      onPageChange(i)
                    }}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 dark:bg-white dark:text-gray-900 border-gray-900 dark:border-gray-50 text-gray-900'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                      'title group border-l-4 py-2 px-3 flex items-center text-xl font-medium uppercase dark:text-gray-300 dark:hover:text-gray-900'
                    )}
                  >
                    {item.current ? <item.currentIcon className={classNames(
                        item.current ? 'text-gray-800 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6' 
                      )}
                      aria-hidden="true" /> :
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-800 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />}
                    {item.name}
                  </a>
                </Link>
              ))}
              {pageNo === 0 ? <div className="transition-all hover:bg-gray-700 dark:bg-white dark:text-gray-900 cursor-pointer bg-gray-900 text-white title px-2 py-2 m-2 uppercase text-center">ADD DATA</div>
                : pageNo === 1 ? <div className="text-gray-900 title px-2 py-2 uppercase w-full text-center">FILTER SUGGESTED
                  <div className="text-left w-full title">SEARCH TAGS</div>
                  <div className="w-full">
                    {target.availableVectors ? target.availableVectors.map((item) => (
                      <div className="inline-block items-center justify-between px-2 py-2 bg-gray-900">{item.name}</div>
                    )) : null}
                  </div>
                  <div className="text-left w-full title">SUGGESTED VECTORS</div>
                </div> :
                  <div className="cursor-pointer bg-gray-900 text-white title px-2 py-2 uppercase">NEW OPERATION</div>}
            </div>

          </div>
          {navigation.secondary.map((item, i) => (
            <Link href={item.href} key={i}>
              <a
                key={item.name}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 dark:bg-gray-900 border-gray-800 dark:border-gray-50 text-gray-800 dark:text-white title'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
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
          {navigation.tertiary.map((item, i) => (
            <a
              key={i}
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
                  'mr-6 flex-shrink-0 h-6 w-8'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
          <div className="ml-2 flex w-full text-gray-600 hover:text-gray-900 hover:bg-gray-50">

            <ThemeToggle callback={setTheme}></ThemeToggle>
            <p className="ml-5 text-sm font-medium text-gray-600 py-2">Dark Mode</p>
          </div>
        </nav>
      </div>
    </div>
  )
}