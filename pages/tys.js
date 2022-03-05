import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Headertys from '../components/tys/Headertys'

export default function tys() {
  return (
    <div>
    <main>

    <Headertys />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
