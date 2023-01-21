import { Inter } from '@next/font/google'
import { Incentive, Footer, Header, Nav, ProductCard } from '../components'
import { client } from '../lib/sanity.client'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  bannerData: Banner[]
  products: Product[]
}

const Home = ({bannerData, products }: Props) => {
  return (
    <>
      <main>
        <div className="gradient-bg h-full">
          <div className='pb-20'>
            <Nav />
          </div>
          <Header bannerInfo={bannerData}/>
        </div> 
        <section id="features">
          <Incentive />
        </section>
        
        <section id='products' className="products-container bg-[#0F0E13] py-20">
          <h2 className="text-5xl text-center font-extrabold tracking-tight text-blue-500 py-10">
            Our Products
          </h2>
          <div className='products-container'>
            {products?.map((product) => <ProductCard key={product._id} productInfo={product} />)}
          </div>
        </section>

      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


  return {
    props: { products, bannerData }
  }
}

export default Home
