import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'


const Layout = ({ children }: any) => {
  return (
    <>
        <Head>
            <title>Liquid</title>
        </Head>
        <div className="bg-[#0F0E13]">
            <Nav/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default Layout