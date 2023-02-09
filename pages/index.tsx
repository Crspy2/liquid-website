import { Layout } from '../components'
import { Inter } from '@next/font/google'
import Link from 'next/link'

import { Incentive, Header, ProductCard } from '../components'
import { client } from '../lib/sanity.client'
import { motion } from 'framer-motion'

import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { HideOn, HideBetween } from '../Crspy-API/Components';
import { groq } from 'next-sanity'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  bannerData: Banner[]
  products: Product[]
  incentiveData: Incentive[]
}

const Home = ({bannerData, products, incentiveData }: Props) => {


  return (
    <Layout>
      <div className="gradient-bg h-full pt-20">
        <Header bannerInfo={bannerData}/>
      </div> 
      
      <section id="about" className='-mt-20 pt-20'>
        <Incentive incentiveInfo={incentiveData} />
      </section>
      
      <section id='products' className="products-container py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl text-center font-extrabold tracking-tight py-10 text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8]"
        >
          Our Products
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='products-container'
        >
          {products?.map((product) => <ProductCard key={product._id} productInfo={product} /> )}
        </motion.div>
        
      </section>

      <HideOn height={20}>
          <div className="sticky bottom-10 pl-20 w-full">
            <div className="flex items-start justify-start animate-bounce">
            <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="17" height="26" viewBox="0, 0, 17, 26" 
                  className="h-6 w-6 rounded-full mr-3 fill-gay-400">
              <g id="Page-1">
                <path d="M8.5,5.5 L8.5,5.5 C8.776,5.5 9,5.724 9,6 L9,8 C9,8.276 8.776,8.5 8.5,8.5 L8.5,8.5 C8.224,8.5 8,8.276 8,8 L8,6 C8,5.724 8.224,5.5 8.5,5.5 z" fill="#FFFFFF" id="Rectangle-11"/>
                <path d="M8.5,0 C13.194,0 17,3.806 17,8.5 L17,17.5 C17,22.194 13.194,26 8.5,26 C3.806,26 0,22.194 0,17.5 L0,8.5 C0,3.806 3.806,0 8.5,0 z M8.5,1 C4.358,1 1,4.358 1,8.5 L1,17.5 C1,21.642 4.358,25 8.5,25 C12.642,25 16,21.642 16,17.5 L16,8.5 C16,4.358 12.642,1 8.5,1 z" fill="#FFFFFF"/>
              </g>
            </svg>
              <p className="text-gray-400 text-[14px] font-light">Scroll for more</p>
            </div>
          </div>
      </HideOn>

      <HideBetween height={true} startHeight={300} endHeight={2100} inverse={true}>
        <Link href="/">
          <div className="sticky bottom-5 w-full">
            <div className="flex items-end justify-end pr-10">
              <BsFillArrowUpCircleFill className="h-10 w-10 rounded-full cursor-pointer text-[#59A9ED]"/>
            </div>
          </div>
        </Link>
      </HideBetween>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = groq`*[_type == "product"]`;
  const products = await client.fetch(productsQuery);

  const bannerQuery = groq`*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  const incentiveQuery = groq`*[_type == "incentive"]`;
  const incentiveData = await client.fetch(incentiveQuery);


  return {
    props: { bannerData, incentiveData, products }
  }
}

export default Home
