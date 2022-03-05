import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Aboutus from '../components/about/Aboutus'

export default function about() {
  return (
    <div>
    <main>

    <Aboutus />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
