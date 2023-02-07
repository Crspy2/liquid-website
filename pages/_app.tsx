import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';


type Props = {}


const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <>
      <AnyComponent {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp