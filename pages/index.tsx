import { Inter } from '@next/font/google'
import { Incentive, Footer, Header, Nav, ProductCard } from '../components'
import { client } from '../lib/sanity.client'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  bannerData: Banner[]
  products: Product[]
  incentiveData: Incentive[]
}

const Home = ({bannerData, products, incentiveData }: Props) => {
  return (
    <div className="bg-[#0F0E13]">
      <main>
        <div className="gradient-bg h-full">
          <div className='pb-20'>
            <Nav />
          </div>
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
            className="text-5xl text-center font-extrabold tracking-tight py-10 text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8] cursor-default"
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
            {products?.map((product) => product.name.includes("R6 Legit") ? <ProductCard key={product._id} productInfo={product} /> : null)}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='products-container'
          >
          {products?.map((product) => product.name.includes("R6 Rage") ? <ProductCard key={product._id} productInfo={product} /> : null)}
          </motion.div>
        </section>

      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const incentiveQuery = '*[_type == "incentive"]';
  const incentiveData = await client.fetch(incentiveQuery);


  return {
    props: { bannerData, incentiveData, products }
  }
}

export default Home
