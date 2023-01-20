import Image from 'next/image'
import React from 'react'
import { Inter } from '@next/font/google'
import { urlFor } from '../lib/sanity.client'

const inter = Inter({ subsets: ['latin'] })


type Props = {
    bannerInfo: Banner[]
}

const Header = ({ bannerInfo }: Props) => {
    const banner: Banner = bannerInfo[0]
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className={`text-3xl sm:text-5xl text-white text-gradient py-1 ${inter.className} font-bold`}>
                        {banner.largeText}
                    </h1>
                    <p className={`text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base ${inter.className}`}>
                        {banner.desc}
                    </p>
                </div>
            </div>
            <div className='pr-20'>
                <Image src={`${urlFor(banner.image)}`} alt="menu" width={2000} height={2000}/>
            </div>
        </div>
    )
}

export default Header