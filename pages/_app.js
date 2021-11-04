import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  
  return(
    <AnimateSharedLayout>
      <Layout >
        <Head>
          <title>Buskamos | Meeting point for property buyers and sellers</title>
          <meta name="Buskamos es la red social de encuentro entre compradores y vendedores de propiedades" content="" />
          <link rel="shortcut icon" type="image/x-icon" href="/webicon.svg"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>

  ) 
}

export default MyApp
