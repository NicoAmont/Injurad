import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Faq from '../components/faq/Faq'

export default function faq() {
  return (
    <div className="bg-bgr">
    <main>

    <Faq />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})




