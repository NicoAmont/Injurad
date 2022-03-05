import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeroSection from '../components/Howitworks/HeroSection'
import OurProcess from '../components/Howitworks/OurProcess'
import PassportPDI from '../components/Howitworks/PassportPDI'
import Risk from '../components/Howitworks/Risk'
import Validity from '../components/Howitworks/Validity'

export default function howitworks() {
  return (
    <div>
    <main>

    <HeroSection />
    <PassportPDI />
    <Validity />
    <Risk />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
