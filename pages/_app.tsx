import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Layout } from '../components';

type Props = {}


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}

export default MyApp