import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from 'next/head'
import Header from '../components//header/Header'
import Explhome from '../components/Explhome'
import Footer from '../components/Footer'
import Herohome from '../components/Home/Herohome'
import Infohome from '../components/Home/Infohome'
import Rol from '../components/Home/Rol'
import Subscribe from '../components/Home/Subscribe'


export default function Home() {
  return (
    <div>

      <main className="">
        <Rol />
        {/* <Herohome /> */}
        <Infohome />
        <Explhome />
      </main>
      
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
