import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Reserva from '../components/formreserva/Reserva'

export default function formreserva() {
  return (
    <div>
    <main>

    <Reserva />
    </main>
    
    </div>
  )
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
