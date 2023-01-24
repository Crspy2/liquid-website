import React from 'react'
import Image from 'next/image'
import { FaDiscord, FaMoneyBill } from 'react-icons/fa'
import { AiFillHome, AiOutlineArrowRight } from 'react-icons/ai'
import { Footer, Nav } from '../components'


const links = [ 
    { title: 'Home', description: 'The homepage of our website', icon: AiFillHome, url: "/"},
    { title: 'Discord', description: 'Out discord support server', icon: FaDiscord, url: "https://discord.gg/ourserver" },
    { title: 'Store', description: 'Out store where you can purchase products', icon: FaMoneyBill, url: "https://liquid.cx/#products"},
  ]
  

const Custom404 = () => {
  return (
    <>
      <div className="outline-none">
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 pt-16">
            <Image
              className="mx-auto"
              src="/logo.png"
              alt="Workflow"
              width={300}
              height={300}
            />
          </div>
          <div className="max-w-xl mx-auto pb-16 sm:pb-24">
            <div className="text-center">
              <p className="text-7xl font-extrabold uppercase tracking-wide prevent-select text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8] cursor-default">404 error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-300 tracking-tight sm:text-5xl prevent-select">
                This page does not exist.
              </h1>
              <p className="mt-2 text-lg text-gray-500 prevent-select">The page you are looking for could not be found.</p>
            </div>
            <div className="mt-12">
              <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">Popular pages</h2>
              <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                {links.map((link, linkIdx) => (
                  <li key={linkIdx} className="relative py-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-900">
                        <link.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-gray-300">
                        <span className="rounded-sm">
                          <a href={link.url} >
                            <span className="absolute inset-0" aria-hidden="true" />
                            {link.title}
                          </a>
                        </span>
                      </h3>
                      <p className="text-base text-gray-500">{link.description}</p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <AiOutlineArrowRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Custom404