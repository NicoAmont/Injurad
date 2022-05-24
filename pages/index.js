import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeroSection from '../components/Home/HeroSection'
import InfoSection from '../components/Home/InfoSection'
import Slogan from '../components/Home/Slogan'
import VideoSection from '../components/Home/VideoSection'
import OurProcess from '../components/Howitworks/OurProcess'
import CardsMobile from '../components/Howitworks/CardsMobile'


export default function Home() {
  return (
    <div>

      <main className="">
        <Slogan />
        <HeroSection />
        <VideoSection />
        <OurProcess />
        <CardsMobile />
        {/* <InfoSection /> */}
        
        
      </main>
      
    </div>
  )
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
