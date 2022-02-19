import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AnimateSharedLayout } from "framer-motion";
import {appWithTranslation} from 'next-i18next';

function MyApp({ Component, pageProps }) {
  
  return(
    <AnimateSharedLayout>
      <Layout >
        <Head>
          <title>INJURAD </title>
          <meta name="Injurad || Supervisor de inspección de propiedades" content="" />
          <link rel="shortcut icon" type="image/x-icon" href="/headlogo.svg"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>

  ) 
}

export default appWithTranslation(MyApp)
