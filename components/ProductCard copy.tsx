import Image from 'next/image'
import React from 'react'

type Props = {
    productInfo: Product
}

const ProductCard = ({ productInfo }: Props) => {
  return (
    <div className="">
      <div className="">
        <div className="container ">
          <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6 ">
            <div className="flex flex-col">
              <div className="h-62 w-full mb-3">
                {/* <Image src={`${urlFor(productInfo.image)}`} alt="productbanner" className=" w-full object-fill rounded-2xl" /> */}
                  <Image    src={productInfo.image.asset._ref.replace('image-', `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`).replace("-png", ".png")} 
                            alt="menu" width={300} height={300}/>
                </div>
                <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-3xl mr-auto cursor-pointer text-gray-200 hover:text-blue-500 truncate font-bold">{productInfo.name}</h2>
                    </div>
                </div>
                <div className="text-xl text-white font-semibold mt-1">${productInfo.price}</div>
                <div className="flex space-x-2 text-sm font-medium justify-start mt-8">
                  <a href="#_" className="relative z-1 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                    <span className="z-1 w-full h-full bg-gradient-to-br from-[#0199fe] to-[#000F76] group-hover:from-[#0199fe]] group-hover:to-[#000F76] absolute"></span>
                    <span className="z-1 relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="z-1 relative text-white">Buy Now!</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard