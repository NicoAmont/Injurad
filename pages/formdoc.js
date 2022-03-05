import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Doc from '../components/formdoc/Doc'

export default function formdoc() {
  return (
    <div>
    <main>

    <Doc />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
