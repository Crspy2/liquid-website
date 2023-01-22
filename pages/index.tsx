import { Inter } from '@next/font/google'
import { Incentive, Footer, Header, Nav, ProductCard } from '../components'
import { client } from '../lib/sanity.client'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  bannerData: Banner[]
  products: Product[]
  incentiveData: Incentive[]
}

const Home = ({bannerData, products, incentiveData }: Props) => {
  return (
    <>
      <main>
        <div className="gradient-bg h-full">
          <div className='pb-20'>
            <Nav />
          </div>
          <Header bannerInfo={bannerData}/>
        </div> 

        <section id="incentive" className='-mt-20 pt-20'>
          <Incentive incentiveInfo={incentiveData} />
        </section>
        
        <section id='products' className="products-container bg-[#0F0E13] py-20">
          <h2 className="text-5xl text-center font-extrabold tracking-tight py-10 text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8] cursor-default">
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

  const incentiveQuery = '*[_type == "incentive"]';
  const incentiveData = await client.fetch(incentiveQuery);


  return {
    props: { bannerData, incentiveData, products }
  }
}

export default Home
