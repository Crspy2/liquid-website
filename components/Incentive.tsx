import Image from "next/image"
import { AiFillEye, AiFillSave } from "react-icons/ai"
import { BiTargetLock } from "react-icons/bi"
import { urlFor } from "../lib/sanity.client"
import { motion } from 'framer-motion'

type Props = {
  incentiveInfo: Incentive[]
}

const Incentive = ({ incentiveInfo }: Props) => {
  const incentive = incentiveInfo[0]
  return (
    <div className="incentive-gradient">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x:-200, y: 200, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-extrabold tracking-tight py-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7928CA] to-[#FF0080]"
              >
                {incentive.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x:-200, y: 200, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="md:mt-4 text-gray-300">
                {incentive.description}
              </motion.p>
            </div>
            <motion.div 
                initial={{ opacity: 0, x:200, y: 200, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden"
            >
              <Image src={`${urlFor(incentive.image)}`} alt="" className="w-auto h-auto" width={550} height={550}/>
            </motion.div>
          </div>
          {/* Blocks */}
          <div className="">
            
            {/*  Features */}
            <motion.div 
              initial={{ opacity: 0, y: 200, scale: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg bg-clip-padding bg-opacity-30 mt-5 max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x"
            >
              <motion.div 
                initial={{ opacity: 0, x:-200, y: 200, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-8 lg:py-0 lg:w-1/3 lg:flex-none"
              >
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                <AiFillEye className="h-8 w-8 text-[#AF18AC]"/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300">{incentive.incentiveDescs[0]}</h3>
                    <p className="text-sm font-medium text-gray-500">{incentive.incentiveTitles[0]}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 200, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-8 lg:py-0 lg:w-1/3 lg:flex-none"
              >
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                  <BiTargetLock className='h-8 w-8 text-[#AF18AC]'/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300">{incentive.incentiveDescs[1]}</h3>
                    <p className="text-sm font-medium text-gray-500">{incentive.incentiveTitles[1]}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x:200, y: 200, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-8 lg:py-0 lg:w-1/3 lg:flex-none"
              >
                <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
                  <AiFillSave className='h-8 w-8 text-[#AF18AC]'/>
                  <div className="ml-4 flex-auto flex flex-col-reverse">
                    <h3 className="font-semibold text-gray-300">{incentive.incentiveDescs[2]}</h3>
                    <p className="text-sm font-medium text-gray-500">{incentive.incentiveTitles[2]}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incentive