import React, { Fragment } from 'react'
import { FaDiscord } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Nav = (props: Props) => {
  return (
  <header className="px-2 sm:px-4 py-2.5 fixed w-full z-20 left-0 bg-transparent backdrop-filter backdrop-blur-lg">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Liquid Logo" className="w-14 h-14" width={50} height={50}/>
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Liquid</span>
    </Link>
    <div className="flex md:order-2">
      <Link href="https://discord.gg/H4SZNkEKex" target="_blank" className="text-gray-500 hover:text-gray-300 text-xl px-5 py-2.5 text-center md:mr-0"><FaDiscord /></Link>
        <button type="button" className="text-white font-bold rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 bg-[#0199fe] mr-3">
          Download
        </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="sticky">
      <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
        <li>
        <Link href="/#about" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white text-gray-300 hover:text-white md:hover:bg-transparent">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/#products" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white text-gray-300 hover:text-white md:hover:bg-transparent">
            Products
          </Link>
        </li>
      </ul>
    </div>
    </div>
  </header>
  )
}

export default Nav