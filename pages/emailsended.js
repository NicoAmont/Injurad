import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Gracias from '../components/gracias/Gracias'

export default function contact() {
  return (
    <div>
    <main>

    <Gracias />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
