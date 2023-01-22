import Image from "next/image"
import { AiFillEye, AiFillSave } from "react-icons/ai"
import { BiTargetLock } from "react-icons/bi"
import { urlFor } from "../lib/sanity.client"

type Props = {
  incentiveInfo: Incentive[]
}

const Incentive = ({ incentiveInfo }: Props) => {
  const incentive = incentiveInfo[0]
  return (
    <div className="bg-[#0F0E13]">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight text-blue-500 py-10 cursor-default">{incentive.title}</h2>
              <p className="md:mt-4 text-gray-300 cursor-default">{incentive.description}</p>
            </div>
            <div className="bg-[#0F0E13] rounded-lg overflow-hidden">
              <Image src={`${urlFor(incentive.image)}`} alt="" className="w-auto h-auto" width={500} height={500}/>
            </div>
          </div>
          {/* Blocks */}
          <div className="">
            
            {/*  Features */}
            <div className="bg-gray-900 rounded-lg bg-clip-padding bg-opacity-30 mt-5 max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
              <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                <AiFillEye className='h-8 w-8 text-blue-500'/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300 cursor-default">{incentive.incentiveDescs[0]}</h3>
                    <p className="text-sm font-medium text-gray-500 cursor-default">{incentive.incentiveTitles[0]}</p>
                  </div>
                </div>
              </div>
              <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                  <BiTargetLock className='h-8 w-8 text-blue-500'/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300 cursor-default">{incentive.incentiveDescs[1]}</h3>
                    <p className="text-sm font-medium text-gray-500 cursor-default">{incentive.incentiveTitles[1]}</p>
                  </div>
                </div>
              </div>
              <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                  <AiFillSave className='h-8 w-8 text-blue-500'/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300 cursor-default">{incentive.incentiveDescs[2]}</h3>
                    <p className="text-sm font-medium text-gray-500 cursor-default">{incentive.incentiveTitles[2]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incentive