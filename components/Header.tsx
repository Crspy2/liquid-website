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
        <div>
            <div className="grid justify-center items-center mt-20 text-center">
                <h1 className={`text-6xl xl:text-8xl lg:text-8xl md:text-7xl ${inter.className} font-bold tracking-tighter`}>
                    <span className='text-white'>{banner.largeText1} </span>
                    <span className='liquid-title-gradient'>{banner.largeText2}.</span>
                </h1>
                <h1 className={`text-2xl xl:text-4xl lg:text-4xl md:text-3xl py-1 ${inter.className} font-bold tracking-tighter`}>
                    <span className='text-white'>Download, login, dominate<strong>!</strong></span>
                </h1>
            </div>
            <div className="grid md:grid-cols-2 w-full h-full justify-center items-center">
                <div className="items-start justify-between md:p-20 py-12 px-4">
                    <div className="justify-start items-start mf:mr-10">
                        <p className={`text-left 2xl:text-lg xl:text-lg lg:text-md md:text-sm text-sm mt-5 text-white font-light ${inter.className}`}>
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

export default Header