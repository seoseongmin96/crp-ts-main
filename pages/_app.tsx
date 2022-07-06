import '../styles/globals.css'
import type { AppProps } from 'next/app'

import {wrapper} from '@/modules/store'
import Nav  from '@/components/Nav'

function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return ( 
    <>
    <Nav/>
    <Component {...pageProps} />
    
    <style jsx>{`
        a{
            textDecoration: none;
        }
    `}</style>
    </>
  )
}

export default wrapper.withRedux(MyApp)
