import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaDiscord, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
  return (
    
<footer className="p-4 bg-[#0F0E13] sm:p-6">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <div className="flex items-center">
                <Image src="/liquid-logo-2.png" className="mr-3" alt="FlowBite Logo" width={50} height={50} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Liquid</span>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <Link href="/" className="hover:underline">Tutorial</Link>
                    </li>
                    <li>
                        <Link href="/" className="hover:underline">Download</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <Link href="https://discord.gg/ourserver" className="hover:underline ">Discord</Link>
                    </li>
                    <li>
                        <Link href="https://youtube.com/@crspytm" className="hover:underline">YouTube</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Liquid</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaDiscord />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaYoutube />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaTiktok />
            </Link>
        </div>
    </div>
</footer>
  )
}

export default Footer