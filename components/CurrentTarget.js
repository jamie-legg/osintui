import { Switch } from "@headlessui/react"
import { DocumentAddIcon, HeartIcon, InformationCircleIcon, LinkIcon, PencilAltIcon, PhotographIcon, PlusCircleIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import useSurface from "../hooks/useSurface"
import { DocumentRemoveIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { classNames } from "../shared/utils"

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

export default function CurrentTarget({ operation }) {
    const [photoEnabled, setPhotoEnabled] = useState(true)
    const [inOps, setInOps] = useState(false)
    const [infoEnabled, setInfoEnabled] = useState(true)


    return(
                    <div className="pb-16 space-y-6">
              <div>
              <Switch.Group as="div" className="flex items-center mb-3">
                <Switch
                    checked={photoEnabled}
                    onChange={setPhotoEnabled}
                    className={classNames(
                        photoEnabled ? 'bg-gray-900 dark:bg-white' : 'bg-gray-200 dark:bg-gray-800',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:ring-white'
                    )}
                >
                    <span
                    aria-hidden="true"
                    className={classNames(
                        photoEnabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform transition ease-in-out duration-200'
                    )}
                    />
                </Switch>
                <Switch.Label as="div" className="ml-3">
                    <PhotographIcon className="h-8 w-8 text-black dark:text-white"/>
                </Switch.Label>
                <Switch
                    checked={infoEnabled}
                    onChange={setInfoEnabled}
                    className={classNames(
                        infoEnabled ? 'bg-gray-900' : 'bg-gray-200',
                    'ml-5 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:ring-white'
                    )}
                >
                    <span
                    aria-hidden="true"
                    className={classNames(
                        infoEnabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                    />
                </Switch>
                <Switch.Label as="div" className="ml-3">
                    <InformationCircleIcon className="h-8 w-8 text-black dark:text-white"/>
                </Switch.Label>
                </Switch.Group>
                <div className="block w-full aspect-w-10 aspect-h-10 rounded-lg object-cover overflow-hidden">
                  <img src={photoEnabled? operation.profilePicUrl : "/static.jpeg"} alt="" className="object-cover" />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl uppercase font-medium text-black dark:text-white">
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
                                      <div className="mt-10 hidden group-hover:inline-block bg-black text-white dark:bg-white dark:text-black p-1.5">Delete Operation</div>
                                    <DocumentRemoveIcon className="h-6 w-6" aria-hidden="true" />
                                    
                                    <span className="sr-only">Favorite</span>
                                  </button>
                                   :
                  <button
                    type="button"
                    onClick={() => setInOps(true)}
                    className={"ml-4 group bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2"}
                  >
                      <div className="mt-10 hidden group-hover:inline-block bg-black text-white dark:bg-white dark:text-black p-1.5">New Operation</div>
                    <DocumentAddIcon className="h-6 w-6" aria-hidden="true" />
                    
                    <span className="sr-only">Favorite</span>
                  </button>
}
                </div>
              </div>
              <div>
                <h3 className="text-lg text-gray-900">Low Hanging Fruit <QuestionMarkCircleIcon onClick={() => setLowHangingDialogOpen(!lowHangingDialogOpen)} className="cursor-pointer inline-block w-6 h-6 text-gray-400 hover:bg-gray-100 hover:text-gray-500"></QuestionMarkCircleIcon></h3>
                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                  {operation.availableSurfaces.map((key, i) => {
                      console.log(operation.availableSurfaces[i])
                      return(
                    <div key={key} className="py-3 flex justify-between text-sm font-medium">
                      <dt className="text-gray-500">{key}</dt>
                      <dd className="text-gray-900"></dd>
                    </div>
                      )
})}     
                </dl>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Description</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm text-gray-500 italic">Add a description to this image.</p>
                  <button
                    type="button"
                    className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <PencilAltIcon className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Add description</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Shared with</h3>
                <ul role="list" className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                  {currentFile.sharedWith.map((person) => (
                    <li key={person.id} className="py-3 flex justify-between items-center">
                      <div className="flex items-center">
                        <img src={person.imageUrl} alt="" className="w-8 h-8 rounded-full" />
                        <p className="ml-4 text-sm font-medium text-gray-900">{person.name}</p>
                      </div>
                      <button
                        type="button"
                        className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Remove<span className="sr-only"> {person.name}</span>
                      </button>
                    </li>
                  ))}
                  <li className="py-2 flex justify-between items-center">
                    <button
                      type="button"
                      className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                        <PlusCircleIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                        Share
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Download
                </button>
                <button
                  type="button"
                  className="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button>
              </div>
            </div>
    )
}