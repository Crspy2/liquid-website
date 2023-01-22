import React from 'react'
import { AiFillEye, AiFillSave } from 'react-icons/ai'
import { BiTargetLock } from 'react-icons/bi'


type Props = {}

const Incentive = (props: Props) => {
  return (
    <div className="bg-[#0f0e13] pt-32">
      <h2 className="text-5xl text-center font-extrabold tracking-tight text-blue-500 py-10">
            A business built for customer satisfaction
      </h2>
      <div className="bg-gray-900 max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
           <AiFillEye className='h-8 w-8 text-blue-500'/>
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <h3 className="font-semibold text-gray-300">Our vast visual customization will let you see what you want!</h3>
              <p className="text-sm font-medium text-gray-500">Unique Visuals</p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <BiTargetLock className='h-8 w-8 text-blue-500'/>
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <h3 className="font-semibold text-gray-300">Tune your aim settings to play the way you want to!</h3>
              <p className="text-sm font-medium text-gray-500">Fast, Customizable Aimbot</p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <AiFillSave className='h-8 w-8 text-blue-500'/>
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <h3 className="font-semibold text-gray-300">Save your config files locally and only configure them once!</h3>
              <p className="text-sm font-medium text-gray-500">Configuration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incentive