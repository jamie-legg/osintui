import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import XButton from './XButton'
import CopyBox from './CopyBox'

export default function InfoModal({ open, onClick, copy }) {

  const data={
      icon:ExclamationIcon, 
      title:"encryption keys", 
      description:"This is your PEM encoded private key. Keep it safe. Download it, or copy it to your clipboard."
  }

  const [ isOpen, setOpen ] = useState(open)

  useEffect(() => {
    setOpen(open)
  }, [open])

  const closeModal = () => {
    onClick()
    setOpen(false)
  }

  const cancelButtonRef = useRef(null)

  return (
    <div>
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
       as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={closeModal}>
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

                <div className="mx-1">
                  <div className="space-y-4">
                    <data.icon className="inline-block rounded-full bg-red-600 p-2 w-12 h-12 text-white"></data.icon>
                    <h3 className="inline-block ml-4 pt-2 title text-2xl text-gray-900">{data.title}</h3>
                    <p className="text-base leading-6 text-gray-500">{data.description}</p>
                    {copy? <CopyBox data={copy}/> : null}
                    <div className="flex justify-end space-x-2">
                      <XButton text="Copy" onClick={() => navigator.clipboard.writeText(copy)}></XButton>
                      <XButton text="Close" onClick={() => closeModal()} ref={cancelButtonRef}></XButton>
                      </div>
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