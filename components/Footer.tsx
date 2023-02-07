import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaDiscord, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
  return (
    
<footer className="p-4 sm:p-6">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <div className="flex items-center">
                <Image src="/liquid-logo-2.png" className="mr-3" alt="FlowBite Logo" width={50} height={50} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Liquid</span>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                <ul className="text-gray-400">
                    <li className="mb-4">
                        <Link href="/" className="hover:underline">Tutorial</Link>
                    </li>
                    <li>
                        <Link href="/download" target="_blank" className="hover:underline">Download</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                <ul className="text-gray-400">
                    <li className="mb-4">
                        <Link href="/pp" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="https://store.liquid.cx/?browse=terms" target="_blank" className="hover:underline">Terms &amp; Conditions</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center text-gray-400">© 2023 <Link href="/" className="hover:underline">Liquid</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href="https://discord.gg/H4SZNkEKex" target="_blank" className="text-gray-500 hover:text-gray-900 hover:text-white">
              <FaDiscord />
            </Link>
            <Link href="https://twitter.com/liquid_cx" target="_blank" className="text-gray-500 hover:text-gray-900 hover:text-white">
              <FaTwitter />
            </Link>
            <Link href="https://youtube.com/@liquidcx" target="_blank" className="text-gray-500 hover:text-gray-900 hover:text-white">
              <FaYoutube />
            </Link>
            <Link href="https://www.tiktok.com/@liquid_cx" target="_blank" className="text-gray-500 hover:text-gray-900 hover:text-white">
              <FaTiktok />
            </Link>
        </div>
    </div>
</footer>
  )
}

export default Footer