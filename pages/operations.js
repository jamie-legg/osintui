import { EyeOffIcon, ShieldCheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/XButton";
import Layout from "../components/Layout";
import { useOperation, useOperationUpdate } from "../context/operation";
import InfoModal from "../components/InfoModal";
import { AES } from "crypto-js";

export default function Operations() {



    const {key, operations} = useOperation();

    const { toggleCryptography } = useOperationUpdate();
    const [encryptedOps, setEncryptedOps] = useState(false);

    //modal state
    const [modalOpen, setShowModal] = useState(false);


    const viewKeysToggle = () => {
        setShowModal(!modalOpen);
    };

    useEffect(() => {
    }, [modalOpen]);

    const toggleEncryptedOps = () => {
        toggleCryptography(!encryptedOps);
        setEncryptedOps(!encryptedOps);
    };
    

    return(
        <>
        <Head>
        <title>Operations / OSINTUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <main className="m-5 flex-1 overflow-y-auto">
        <p className="mb-5 text-gray-500 pointer-events-none select-none dark:text-gray-300">
        <EyeOffIcon className={`inline-block h-5 w-5 mb-1 mr-5 text-red-600 dark:text-blue-600`} />
        Cryptographic functions rely on the <span className="code text-black">crypto</span> module, view documentation for implementation.<br></br>
        <span className="code text-black">RSA_PKCS1_OAEP</span> padding is used</p>
        <InfoModal open={modalOpen} onClick={viewKeysToggle} copy={key} />
        <div className="flex space-x-5">
            <Button text="Encrypt Operations" onClick={toggleEncryptedOps} icon={ShieldCheckIcon}/>
            <Button text="View Keys" onClick={viewKeysToggle} icon={ShieldCheckIcon}/>
        </div>
        <div className="grid grid-cols-2">
            <div className="col-span-1 overflow-y-auto">
                {encryptedOps ? 
                <p></p>
                : operations.map((operation, index) => {
                        return <div key={index} className="flex flex-col justify-center items-center">
                            <div className="text-gray-500 text-center">
                                <span className="text-lg">{operation.name}</span>
                                <span className="text-sm">{operation.description}</span>
                            </div>
                            <div className="text-center">
                                <span className="text-gray-500">{operation.value}</span>
                            </div>
                        </div>
                    }
                )}
            </div>
            <pre className="col-span-1 code text-sm">
                

                
        {encryptedOps ? [...JSON.stringify(operations)].map((s,i) => i%16==0 ? s+"\n" : i%8==0? s+" ": s) : JSON.stringify(operations, null, 2)}


            </pre>
            </div>
        </main>
        </>
    )
}