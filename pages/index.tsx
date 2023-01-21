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
        <div className="gradient-bg">
          <Nav />
          <Header bannerInfo={bannerData}/>
        </div>

        <div id='products' className="products-container bg-[#0F0E13] ">
          {products?.map((product) => <ProductCard key={product._id} productInfo={product} />)}
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
