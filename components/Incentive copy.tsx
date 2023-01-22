import { AiFillEye, AiFillSave } from "react-icons/ai"
import { BiTargetLock } from "react-icons/bi"

const Incentive = () => {
  return (
    <div className="bg-[#0F0E13]">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight text-blue-500 py-10 cursor-default">
                A business built for customer satisfaction
              </h2>
              <p className="mt-4 text-gray-400 cursor-default">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                caring about that. Our new strategy is to write a bunch of things that look really good in the
                headlines, then clarify in the small print but hope people don't actually read it.
              </p>
            </div>
            <div className="bg-[#0F0E13] rounded-lg overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                alt=""
                className=""
              />
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
                    <h3 className="font-semibold text-gray-300 cursor-default">Our vast visual customization will let you see what you want!</h3>
                    <p className="text-sm font-medium text-gray-500 cursor-default">Unique Visuals</p>
                  </div>
                </div>
              </div>
              <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                  <BiTargetLock className='h-8 w-8 text-blue-500'/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300 cursor-default">Tune your aim settings to play the way you want to!</h3>
                    <p className="text-sm font-medium text-gray-500 cursor-default">Fast, Customizable Aimbot</p>
                  </div>
                </div>
              </div>
              <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                  <AiFillSave className='h-8 w-8 text-blue-500'/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300 cursor-default">Save your config files locally and only configure them once!</h3>
                    <p className="text-sm font-medium text-gray-500 cursor-default">Configuration</p>
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