import 'tailwindcss/tailwind.css'
import '../global.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react';
import useSurface from '../hooks/useSurface'
import useStorage from '../hooks/useStorage'
import { OperationWrapper } from '../context/operation'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const ops = getItem('operations')
    if(!ops) {
      console.log("ready for new operations")
    }
    else if(ops.length == 0) {
      alert("no ops")
    }},[]);
    
  

  const changeOperations = (ops=[]) => {
    setItem('operations', ops)
  }

  const { getItem } = useStorage();

  const [pageNo, setPageNo] = useState(0)
  

  return (
    <OperationWrapper>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Layout pageNo={pageNo} onPageChange={setPageNo} changeOperations={changeOperations}>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </OperationWrapper>
  )
}

export default MyApp