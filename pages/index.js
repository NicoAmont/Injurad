import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeroSection from '../components/Home/HeroSection'
import InfoSection from '../components/Home/InfoSection'
import Slogan from '../components/Home/Slogan'
import VideoSection from '../components/Home/VideoSection'
import OurProcess from '../components/Howitworks/OurProcess'


export default function Home() {
  return (
    <div>

      <main className="">
        <Slogan />
        <HeroSection />
        <VideoSection />
        <OurProcess />
        <InfoSection />
        
        
      </main>
      
    </div>
  )
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
