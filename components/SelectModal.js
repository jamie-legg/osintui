/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { BookmarkIcon, CheckIcon, CubeTransparentIcon, ExternalLinkIcon, LinkIcon, PencilAltIcon } from '@heroicons/react/outline'
import { classNames } from '../shared/utils'

export default function SelectModal({ providers, target, open, onClose, onChange }) {
  const [isOpen, setOpen] = useState(open)

  useEffect(() => {
    setOpen(open)
  }, [open])

  const closeModal = () => {
    setOpen(false)
    onClose()
  }

  const makeDefault = (provider) => {
  }


  return (
    <div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={closeModal}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block h-10.8425C18 align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-y-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>

                  <div className="mx-1">
                    <div className="space-y-4">
                      {providers ? providers.map((provider, i) => (
                        <div
                          key={i}
                          value={provider.surfaceKey}
                          className={classNames(
                              target.defaultProviderKey === provider.surfaceKey ? 'border-red-600 border-solid' : 'border-dashed hover:border-gray-400',
                              'relative block rounded-none border-4 shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none group'
                            )
                          }
                        >
                          <div className="grid grid-cols-3">
                            <div className="col-span-1 text-sm">
                              <div className="font-medium text-gray-900">
                                <svg className={"block h-10 w-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <title>{provider.name}</title>
                                  <path fill="currentColor" d={provider.iconPath} />
                                </svg>
                                <h3 className="inline-block title text-2xl">
                                  {provider.name}
                                </h3>

                              </div>
                            </div>
                            <div className="col-span-1 space-x-2 items-end text-right">
                              
                            <form 
                              
                            onSubmit={(e) => {
                            e.preventDefault()
                            updateTarget()
                            }
                          }>
                            <input disabled={target.identities[i] && target.identities[i].username} placeholder={target.identities[i] ? target.identities[i].username : '@username'} className="pl-1 code inline-block rounded-none border-b-4 mx-2 border-gray-900"></input>
                            </form>
                          </div>
                          <div className="col-span-1 ml-4 items-end text-right">
                            <BookmarkIcon onClick={makeDefault(provider)} className="group-hover:text-red-400 inline-block h-6 w-6 text-gray-900 dark:text-white" />
                            <PencilAltIcon className="inline-block h-6 w-6 text-gray-900 dark:text-white" />
                            <ExternalLinkIcon className="inline-block h-6 w-6 text-gray-900 dark:text-white" />
                          </div>

                          </div>
                        </div>
                      )) : null}

                    </div>


                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
