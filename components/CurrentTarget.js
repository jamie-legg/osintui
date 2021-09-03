import { Switch } from "@headlessui/react"
import { DocumentAddIcon, HeartIcon, InformationCircleIcon, LinkIcon, PencilAltIcon, PhotographIcon, PlusCircleIcon, RefreshIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import useSurface from "../hooks/useSurface"
import { DocumentRemoveIcon, PlusSmIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { classNames } from "../shared/utils"
import ModalDialog from "./ModalDialog"

const currentFile = {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    information: {
      'Uploaded by': 'Marie Culver',
      Created: 'June 8, 2020',
      'Last modified': 'June 8, 2020',
      Dimensions: '4032 x 3024',
      Resolution: '72 x 72',
    },
    sharedWith: [
      {
        id: 1,
        name: 'Aimee Douglas',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
      },
      {
        id: 2,
        name: 'Andrea McMillan',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  }

export default function CurrentTarget({ operation, onChange }) {
    const [lowHangingDialogOpen, setLowHangingDialogOpen] = useState(false)
    const [photoEnabled, setPhotoEnabled] = useState(true)
    const [inOps, setInOps] = useState(false)
    const [infoEnabled, setInfoEnabled] = useState(true)

    const [fruit, setFruit] = useState(operation.availableSurfaces);
    useEffect(() => {
        setFruit(operation.availableSurfaces)
    }, [operation])
    return(
                    <div className="pb-16 space-y-6">
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
                    <PhotographIcon className="h-8 w-8 text-gray-900 dark:text-white"/>
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
                    <InformationCircleIcon className="h-8 w-8 text-gray-900 dark:text-white"/>
                </Switch.Label>
                </Switch.Group>
                <div className="block w-full aspect-w-10 aspect-h-10 rounded-lg object-cover overflow-hidden">
                  {operation.profilePicUrl.length > 0 ? <img src={photoEnabled? operation.profilePicUrl : "/static.jpeg"} alt="" className="object-cover" /> : 
                  <button type="button" class="block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2">
                    <PhotographIcon className="inline w-7 h-7 text-gray-400"></PhotographIcon>
                    <PlusSmIcon className="inline w-7 h-7 text-gray-400"></PlusSmIcon>
                  <span class="mt-2 block text-sm font-medium text-gray-900">
                    Add a new image
                  </span>
                </button>}
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl uppercase font-medium text-gray-900 dark:text-white">
                      <span className="sr-only">Details for </span>
                      {infoEnabled ? operation.name : "##### ####"}
                    </h2>
                    <p className="text-sm font-medium text-gray-500 title">{infoEnabled ? operation.username : "######"} | <LinkIcon className="inline-block h-3 w-3 text-gray-500"></LinkIcon></p>
                  </div>
                  {inOps?
                                    <button
                                    type="button"
                                    onClick={() => setInOps(false)}
                                    className={"ml-4 group bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2"}
                                  >
                                      <div className="mt-10 hidden group-hover:inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-1.5">Delete Operation</div>
                                    <DocumentRemoveIcon className="h-6 w-6" aria-hidden="true" />
                                    
                                    <span className="sr-only">Favorite</span>
                                  </button>
                                   :
                  <button
                    type="button"
                    onClick={() => setInOps(true)}
                    className={"ml-4 group bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2"}
                  >
                      <div className="mt-10 hidden group-hover:inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-1.5">New Operation</div>
                    <DocumentAddIcon className="h-6 w-6" aria-hidden="true" />
                    
                    <span className="sr-only">Favorite</span>
                  </button>
}
                </div>
              </div>
              <div>
                <h3 className="text-xl header uppercase text-gray-900 dark:text-white">Low Hanging Fruit <RefreshIcon onClick={() => setLowHangingDialogOpen(!lowHangingDialogOpen)} className="cursor-pointer inline-block w-6 h-6 text-gray-400 hover:bg-gray-100 hover:text-gray-500"/></h3>
                <ModalDialog open={lowHangingDialogOpen} onClose={() => setLowHangingDialogOpen(!lowHangingDialogOpen)} />
                <dl className="mt-2 border-t border-b border-gray-200">
                  {fruit.map((surface, i) => {
                      return(
                    <div key={surface.key} className="cursor-pointer group uppercase p-1.5 m-1 title inline-block bg-gray-900 text-white text-sm font-medium">
                      <dt className="">{infoEnabled? surface.key : "####"+(Math.floor(Math.random()*2) == 1 ? "##" : "#")} <span className="p-1 px-2 first-line:w-3 h-3 rounded-full bg-white text-red-600 group-hover:text-red-800">{surface.priority}</span></dt>
                      
                    </div>
                      )
})}     
                </dl>
              </div>
              <h3 className="text-xl header uppercase dark:text-white text-gray-900">DOCUMENTED VECTORS <RefreshIcon onClick={() => setLowHangingDialogOpen(!lowHangingDialogOpen)} className="cursor-pointer inline-block w-6 h-6 text-gray-400 hover:bg-gray-100 hover:text-gray-500"/></h3>
                <dl className="mt-2 border-t border-b border-gray-200">
                  {fruit.map((surface, i) => {
                      return(
                    <div key={surface.key} className="cursor-pointer group uppercase p-1.5 m-1 title inline-block bg-gray-900 text-white dark:text-gray-900 dark:bg-white text-sm font-medium">
                      <dt className="">{infoEnabled? surface.key : "####"+(Math.floor(Math.random()*2) == 1 ? "##" : "#")} <span className="p-1 px-2 first-line:w-3 h-3 rounded-full bg-white text-red-600 group-hover:text-red-800">{surface.priority}</span></dt>
                      
                    </div>
                      )
})}     
                </dl>
              
            </div>
    )
}