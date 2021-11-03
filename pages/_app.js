import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout >
      <Head>
        <title>Buskamos | Meeting point for property buyers and sellers</title>
        <meta name="Buskamos es la red social de encuentro entre compradores y vendedores de propiedades" content="" />
        <link rel="shortcut icon" type="image/x-icon" href="/webicon.svg"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
