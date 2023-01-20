import { Inter } from '@next/font/google'
import { Header, Nav } from '../components'
import { client } from '../lib/sanity.client'

// const inter = Inter({ subsets: ['latin'] })

type Props = {
  bannerData: Banner[]
  products: Product
}

const Home = ({bannerData, products}: Props) => {
  return (
    <main className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Nav />
        <Header bannerInfo={bannerData}/>
      </div>

    </main>
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
