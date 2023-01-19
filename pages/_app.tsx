import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme, getDocumentTheme } from '@nextui-org/react'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const darkTheme = createTheme({ type: "dark"})


type Props = {}


const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // you can use any storage
    let theme = window.localStorage.getItem('data-theme');
    setIsDark(theme === 'dark');

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={darkTheme}>
      <Head>
        <title>Liquid</title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp