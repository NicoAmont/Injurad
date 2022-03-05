import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import WorkZone from '../components/Workers/WorkZone'

export default function workers() {
  return (
    <div>
    <main>

    <WorkZone />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
