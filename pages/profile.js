import Head from 'next/head'
import Header from '../components//header/Header'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Profile() {
  return (
    <div>
      
      <Head>
        <title>Buskamos | Meeting point for property buyers and sellers</title>
        <meta name="Buskamos es la red social de encuentro entre compradores y vendedores de propiedades" content="" />
        <link rel="shortcut icon" type="image/x-icon" href="/webicon.svg"/>
      </Head>
      <Header /> 
      
      <main className="flex flex-row m-0">
        <Sidebar />
        
        <Feed />
        
        {/* Widgets */}

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
