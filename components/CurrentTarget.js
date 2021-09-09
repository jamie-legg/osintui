import { Switch } from "@headlessui/react"
import { BanIcon, DocumentAddIcon, HeartIcon, InformationCircleIcon, LinkIcon, PencilAltIcon, PhotographIcon, PlusCircleIcon, RefreshIcon, ReplyIcon, SaveAsIcon } from "@heroicons/react/outline"
import { useEffect, useRef, useState } from "react"
import useSurface from "../hooks/useSurface"
import { ArrowsExpandIcon, DocumentRemoveIcon, PlusSmIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { classNames } from "../shared/utils"
import ModalDialog from "./ModalDialog"
import { useOperation, useOperationUpdate } from '../context/operation'
import SelectModal from "./SelectModal"
import OpBox from "./OpBox"
import XButton from "./XButton"

export default function CurrentTarget({ onChange }) {

  
  const [isOpen, setIsOpen] = useState(false)
  const { getIdentityProviders, getVectorSurfaceMap } = useSurface();
  const { operations, operationIndex, targetIndex } = useOperation();
  const { addIdentityToTarget, removeIdentityFromTarget } = useOperationUpdate();

  const [target, setTarget] = useState(operations[operationIndex][targetIndex]);

  const imageRef = useRef();

  const [lowHangingDialogOpen, setLowHangingDialogOpen] = useState(false)
  const [photoEnabled, setPhotoEnabled] = useState(true)
  const [inOps, setInOps] = useState(false)
  const [infoEnabled, setInfoEnabled] = useState(true)
  const providers = getIdentityProviders()
  const [selectModalOpen, setSelectModalOpen] = useState(false)
  const toggleSelectModal = () => setSelectModalOpen(!selectModalOpen)

  const vectorMap = getVectorSurfaceMap()
  

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
            <>
            <button type="button" onClick={() => imageRef.current.focus()} className="block group w-full border-4 border-gray-200 border-dashed rounded-lg p-12 text-center hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2">
              
              <PhotographIcon className="inline w-7 h-7 text-gray-400 group-hover:text-gray-500"></PhotographIcon>
              <PlusSmIcon className="inline w-7 h-7 text-gray-400 group-hover:text-gray-500"></PlusSmIcon>
              <label className="mt-2 block text-sm font-medium text-gray-400 group-hover:text-gray-500">
                Add a new image
              </label>
            </button>
            <input ref={imageRef} id="file-upload" name="file-upload" type="file" className="w-full h-full z-40 sr-only border-none absolute block pin-r pin-t"></input>
            </>}
        </div>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h2 className="text-3xl uppercase title font-medium text-gray-900 dark:text-white">
              <span className="sr-only">Details for </span>
              {infoEnabled ? target.name : "##### ####"}
            </h2>
            {target.username ? <p className="cursor-pointer text-blue-600 hover:text-blue-800 text-sm font-medium code title">{infoEnabled ? "@" + target.username : "######"} | {target.defaultProviderKey} <LinkIcon className="inline-block h-3 w-3"></LinkIcon></p> :
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
        <h3 className={classNames(target.availableVectors.length > 0? "border-red-500":"border-white", "p-2 text-xl header text-gray-900 dark:text-white border-4")}>Surface Vectors <ArrowsExpandIcon onClick={() => setState(!state)} className="cursor-pointer inline-block w-6 h-6 text-gray-400 hover:bg-gray-100 hover:text-gray-500" /></h3>
        <ModalDialog open={lowHangingDialogOpen} onClose={() => setState(!state)} />
        <div className="mt-2 border-t border-b">
          {target.availableVectors ? target.availableVectors.map((surface, i) => {
            return (
              <>
              <XButton onClick={() => alert(surface.key)} text={(vectorMap.find((v) => v.key === surface.key).name)} />
              </>
          )}):null}
        </div>
      </div>

    </div>
  )
}