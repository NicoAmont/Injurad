import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Igp from '../components/formigp/Igp'

export default function formigp() {
  return (
    <div>
    <main>

    <Igp />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
