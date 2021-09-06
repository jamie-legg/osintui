import { Switch } from "@headlessui/react"
import { DocumentAddIcon, HeartIcon, InformationCircleIcon, LinkIcon, PencilAltIcon, PhotographIcon, PlusCircleIcon, RefreshIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import useSurface from "../hooks/useSurface"
import { DocumentRemoveIcon, PlusSmIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { classNames } from "../shared/utils"
import ModalDialog from "./ModalDialog"
import { useOperation } from '../context/operation'
import SelectModal from "./SelectModal"

export default function CurrentTarget({ onChange }) {

  
  const [isOpen, setIsOpen] = useState(false)
  const { getIdentityProviders } = useSurface();
  const { operation, setOperation } = useOperation();
  const [target, setTarget] = useState(useOperation()[0])
  

  const [lowHangingDialogOpen, setLowHangingDialogOpen] = useState(false)
  const [photoEnabled, setPhotoEnabled] = useState(true)
  const [inOps, setInOps] = useState(false)
  const [infoEnabled, setInfoEnabled] = useState(true)
  const providers = getIdentityProviders()
  const [selectModalOpen, setSelectModalOpen] = useState(false)
  const toggleSelectModal = () => setSelectModalOpen(!selectModalOpen)

  const getRandomName = () => {
    const randomNames = [
      "John Doe",
      "Jamie Legg",
      "Jane Doe",
      "John Smith",
      "Jane Smith",
      "Jamie Smith",
      "John Legg",
      "Jane Legg",
    ]
    return randomNames[Math.floor(Math.random() * randomNames.length)]
  }


  const randomName = getRandomName()

  return (
    <div className="pb-16 space-y-6">
      <SelectModal providers={providers} target={target} open={selectModalOpen} onChange={onChange} onClose={toggleSelectModal}></SelectModal>
      <div>
        <Switch.Group as="div" className="flex items-center mb-3">
          <Switch
            checked={photoEnabled}
            onChange={setPhotoEnabled}
            className={classNames(
              photoEnabled ? 'bg-gray-900 dark:bg-white' : 'bg-gray-200 dark:bg-gray-800',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-none cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:ring-white'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                photoEnabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-none bg-white dark:bg-gray-900 shadow transform transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <Switch.Label as="div" className="ml-3">
            <PhotographIcon className="h-8 w-8 text-gray-900 dark:text-white" />
          </Switch.Label>
          <Switch
            checked={infoEnabled}
            onChange={setInfoEnabled}
            className={classNames(
              infoEnabled ? 'bg-gray-900' : 'bg-gray-200',
              'ml-5 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-none cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:ring-white'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                infoEnabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 rounded-none bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
          <Switch.Label as="div" className="ml-3">
            <InformationCircleIcon className="h-8 w-8 text-gray-900 dark:text-white" />
          </Switch.Label>
        </Switch.Group>
        <div className="block w-full aspect-w-10 aspect-h-10 rounded-lg object-cover overflow-hidden">
          {target.profilePicUrl ? <img src={photoEnabled ? target.profilePicUrl : "/static.jpeg"} alt="" className="object-cover" /> :
            <button type="button" className="block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <PhotographIcon className="inline w-7 h-7 text-gray-400"></PhotographIcon>
              <PlusSmIcon className="inline w-7 h-7 text-gray-400"></PlusSmIcon>
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Add a new image
              </span>
            </button>}
        </div>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h2 className="text-3xl uppercase title font-medium text-gray-900 dark:text-white">
              <span className="sr-only">Details for </span>
              {infoEnabled ? target.name ? target.name : randomName : "##### ####"}
            </h2>
            {target.username ? <p className="text-sm font-medium code text-gray-500 title">{infoEnabled ? target.username : "######"} | <LinkIcon className="inline-block h-3 w-3 text-gray-500"></LinkIcon></p> :
            <span onClick={() => setSelectModalOpen(!selectModalOpen)} className="cursor-pointer inline-block h-8 bg-gray-900 text-white code py-1 px-1">ADD A USERNAME</span>}
          </div>
          {inOps ?
            <button
              type="button"
              onClick={() => setInOps(false)}
              className={"ml-4 group bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2"}
            >
              <div className="mt-10 hidden group-hover:inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-1.5">Delete Target</div>
              <DocumentRemoveIcon className="h-6 w-6" aria-hidden="true" />

              <span className="sr-only">Favorite</span>
            </button>
            :
            <button
              type="button"
              onClick={() => setInOps(true)}
              className={"ml-4 group bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2"}
            >
              <div className="mt-10 hidden group-hover:inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-1.5">New Target</div>
              <DocumentAddIcon className="h-6 w-6" aria-hidden="true" />

              <span className="sr-only">Favorite</span>
            </button>
          }
        </div>
      </div>
      <div>
        <h3 className="text-xl header uppercase text-gray-900 dark:text-white">Available Vectors <RefreshIcon onClick={() => setState(!state)} className="cursor-pointer inline-block w-6 h-6 text-gray-400 hover:bg-gray-100 hover:text-gray-500" /></h3>
        <ModalDialog open={lowHangingDialogOpen} onClose={() => setState(!state)} />
        <dl className="mt-2 border-t border-b border-gray-200">
          {target.availableVectors ? target.availableVectors.map((surface, i) => {
            return (
              <div key={surface.key} className="cursor-pointer group uppercase p-1.5 m-1 title inline-block bg-gray-900 text-white text-sm font-medium">
                <dt className="">{infoEnabled ? surface.key : "####" + (Math.floor(Math.random() * 2) == 1 ? "##" : "#")} <span className="p-1 px-2 first-line:w-3 h-3 rounded-full bg-white text-red-600 group-hover:text-red-800">{surface.priority}</span></dt>

              </div>
            )
          }) : null}
        </dl>
      </div>
      <h3 className="text-xl header uppercase dark:text-white text-gray-900">DOCUMENTED VECTORS <RefreshIcon onClick={() => setLowHangingDialogOpen(!lowHangingDialogOpen)} className="cursor-pointer inline-block w-6 h-6 text-gray-400 hover:bg-gray-100 hover:text-gray-500" /></h3>
      <dl className="mt-2 border-t border-b border-gray-200">
        {target.documentedVectors ? target.documentedVectors.map((surface, i) => {
          return (
            <div key={surface.key} className="cursor-pointer group uppercase p-1.5 m-1 title inline-block bg-gray-900 text-white dark:text-gray-900 dark:bg-white text-sm font-medium">
              <dt className="">{infoEnabled ? surface.key : "####" + (Math.floor(Math.random() * 2) == 1 ? "##" : "#")} <span className="p-1 px-2 first-line:w-3 h-3 rounded-full bg-white text-red-600 group-hover:text-red-800">{surface.priority}</span></dt>

            </div>
          )
        }) : null}
      </dl>

    </div>
  )
}