import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import { FaDiscord } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type Props = {}

const Nav = (props: Props) => {
  return (
    
<div className="px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 bg-transparent backdrop-filter backdrop-blur-lg">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" className="flex items-center">
      <Image src="/logo.png" alt="Liquid Logo" className="w-14 h-14" width={50} height={50}/>
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Liquid</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white font-bold rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 bg-[#0199fe] mr-3">
        Sign up
      </button>
      <button type="button" className="text-white font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-[#0199fe] md:ml-3">
        Log in
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="sticky">
    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
      <li>
      <a href="#incentive" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
          Propaganda
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
          Reviews
        </a>
      </li>
      <li>
        <a href="#products" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
          Products
        </a>
      </li>
      <li>
      <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-white text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
          Contact
        </a>
      </li>
    </ul>
  </div>
  </div>
</div>
  )
}

export default Nav