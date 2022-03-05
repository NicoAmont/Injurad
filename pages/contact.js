import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Contact from '../components/contact/Contact'

export default function contact() {
  return (
    <div>
    <main>

    <Contact />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
