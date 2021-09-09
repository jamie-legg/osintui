import { ClipboardCopyIcon, DownloadIcon } from "@heroicons/react/outline";

const CopyBox = ({ data }) => {
    return (
        <div className="flex">
        
        <textarea disabled value={data} className="w-full resize-y relative code text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 overflow-hidden h-12 mx-auto px-1 cursor-pointer border-4 border-gray-900">
        
            

        </textarea>
        </div>
    )
}

export default CopyBox;