/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { useOperationUpdate } from '../context/operation'

export default function ModalDialog({ provider, open, onClose, onSuccess }) {
  const { add} = useOperationUpdate()
  const [isOpen, setOpen] = useState(open)
  const [inputState, setInputState] = useState("")

  useEffect(() => {
    setOpen(open)
  },[open])


  const closeModal = () => {
    setOpen(false)
    onClose()
  }

  const updateTarget = (e) => {
    e.preventDefault()
    setOpen(false)
    onSuccess(provider.surfaceKey, inputState)
  }

  return (
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-1 flex h-12">
                  {provider ? <>
                              <svg className={"block h-10 w-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>{provider.name}</title>
                              <path fill="currentColor" d={provider.iconPath} />
                            </svg> 
                            <Dialog.Title as="h3" className="ml-3 text-2xl title inline-blockleading-6 font-medium text-gray-900">
                            {provider.name}
                          </Dialog.Title>
                          </>
                            
                            : null}

                            
                </div>

                <div className="mt-3 text-left sm:mt-5">

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {provider ? `Enter the ${provider.name} username of your target.` : null}
                    </p>
                    <p className="text-sm text-gray-500">
                      Do not include the @ sign.
                    </p>
                  </div>
                </div>
              </div>
              <form onSubmit={updateTarget}>
              <div className="mt-3 text-center sm:mt-5">
                <input onChange={
                  (e) => {
                    setInputState(e.target.value)
                  }
                } placeholder={" @username"} className="p-2 rounded-none border-gray-900 focus:border-gray-900 w-full code">
                </input>
              </div>
              
              <div className="mt-5 sm:mt-6 flex gap-x-2">
              <button
                  type="button"
                  className="inline-flex justify-center w-48 border border-transparent shadow-sm px-4 py-2 bg-gray-700 title font-medium text-white"
                  onClick={closeModal}
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center w-48 border border-transparent shadow-sm px-4 py-2 bg-gray-900 title font-medium text-white"
                >
                  ADD
                </button>

              </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
