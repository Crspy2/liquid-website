import Image from 'next/image'
import React from 'react'
import { Inter } from '@next/font/google'
import { urlFor } from '../lib/sanity.client'

const inter = Inter({ subsets: ['latin'] })


type Props = {
    bannerInfo: Banner[]
}

const Haed = ({ bannerInfo }: Props) => {
    const banner: Banner = bannerInfo[0]
    return (
        <div>
            <div className="flex w-full h-full justify-center items-center mt-20">
                <h1 className={`text-9xl sm:text-8xl py-1 ${inter.className} font-bold prevent-select`}>
                    <span className='text-white'>{banner.largeText1} </span>
                    <span className='liquid-title-gradient'>{banner.largeText2}</span>
                </h1>
            </div>
            <div className="flex w-full h-full justify-center items-center">
                <h1 className={`text-5xl sm:text-4xl py-1 ${inter.className} font-bold prevent-select`}>
                    <span className='text-white'>Download, login, dominate<strong>!</strong></span>
                </h1>
            </div>
            <div className="flex w-full h-full justify-center items-center">
                <div className="flex flex-col items-start justify-between md:p-20 py-12 px-4">
                    <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                        <p className={`text-left text-lg mt-5 text-white font-light ${inter.className}`}>
                            {banner.desc}
                        </p>
                    </div>
                </div>
                <div>
                    <Image src={`${urlFor(banner.image)}`} alt="menu" width={5000} height={5000}/>
                </div>
            </div>
        </div>
    )
}

export default Haed