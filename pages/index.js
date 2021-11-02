import Head from 'next/head'
import Header from '../components//header/Header'
import Footer from '../components/Footer'
import Herohome from '../components/Herohome'

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>Buskamos | Meeting point for property buyers and sellers</title>
        <meta name="Buskamos es la red social de encuentro entre compradores y vendedores de propiedades" content="" />
        <link rel="shortcut icon" type="image/x-icon" href="/webicon.svg"/>
      </Head>
      <Header /> 
      
      <main className="">
        <Herohome /> 

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
