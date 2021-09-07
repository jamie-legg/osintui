import Head from "next/head";
import Layout from "../components/Layout";
import { useOperation } from "../context/operation";

export default function Operations() {
    const operations = useOperation();
    return(
        <>
                  <Head>
        <title>Operations / OSINTUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="flex-1 overflow-y-auto">
            <pre className="code text-sm">
                {JSON.stringify(operations, null, 2)}
            </pre>
        </main>
        </>
    )
}