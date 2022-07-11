import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SendDoc from '../components/sendDoc/SendDoc'

export default function sendDoc() {
  return (
    <div>
    <main>

    <SendDoc />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
