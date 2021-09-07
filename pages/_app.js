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

  const [pageNo, setPageNo] = useState(0)
  

  return (
    <OperationWrapper>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Layout pageNo={pageNo} onPageChange={setPageNo}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </OperationWrapper>
  )
}

export default MyApp