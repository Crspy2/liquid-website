import { Inter } from '@next/font/google'
import { Footer, Header, Nav, ProductCard } from '../components'
import { client } from '../lib/sanity.client'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  bannerData: Banner[]
  products: Product[]
}

const Home = ({bannerData, products}: Props) => {
  return (
    <>
      <main>
        <div className="gradient-bg h-full">
          <Nav />
          <Header bannerInfo={bannerData}/>
        </div> 
        
        <div id='products' className="products-container bg-[#0F0E13] py-20">
          <h1 className={`text-2xl xl:text-4xl lg:text-4xl md:text-3xl py-1 ${inter.className} font-bold prevent-select text-center justify-center`}>
              Our Products
          </h1>
          <div className='products-container'>
            {products?.map((product) => <ProductCard key={product._id} productInfo={product} />)}
          </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home
