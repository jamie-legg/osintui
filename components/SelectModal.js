/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-y-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-1 h-96">
                    <RadioGroup value={target.currentIdentityVector} onChange={onChange}>
                      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                      <div className="space-y-4">
                        {providers ? providers.map(provider => (
                          <RadioGroup.Option
                            key={providers.id}
                            value={provider.surfaceKey}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-1 ring-offset-2 ring-gray-900' : '',
                                'relative block rounded-none border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none'
                              )
                            }
                          >
                            {({ checked }) => (
                              <>
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label as="p" className="font-medium text-gray-900">
                                      <svg className={"block h-10 w-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>{provider.name}</title>
                                        <path fill="currentColor" d={provider.iconPath} />
                                      </svg>
                                      <h3 className="inline-block title text-2xl">
                                        {provider.name}
                                      </h3>

                                    </RadioGroup.Label>
                                    <RadioGroup.Description as="div" className="text-gray-500">
                                      <p className="sm:inline">
                                        {provider.username ? provider.username : 'Not Configured'}
                                      </p>{' '}
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                <form onSubmit={(e) => {
                                e.preventDefault()
                                updateTarget()}
                              }>

                              </form>
                                <div
                                  className={classNames(
                                    checked ? 'border-gray-900' : 'border-transparent',
                                    'absolute -inset-px rounded-none border-2 pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        )) : null}
                      </div>
                    </RadioGroup>
                    

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
