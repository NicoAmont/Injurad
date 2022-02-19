import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeroSection from '../components/Home/HeroSection'
import InfoSection from '../components/Home/InfoSection'
import Slogan from '../components/Home/Slogan'
import VideoSection from '../components/Home/VideoSection'


export default function Home() {
  return (
    <div>

      <main className="">
        <HeroSection />
        <Slogan />
        <VideoSection />
        <InfoSection />
        
        
      </main>
      
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
