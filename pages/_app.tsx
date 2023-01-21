import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

type Props = {}


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Liquid</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp