import Head from 'next/head'
import Header from '../components//header/Header'
import Explhome from '../components/Explhome'
import Footer from '../components/Footer'
import Herohome from '../components/Herohome'
import Infohome from '../components/Infohome'
import Rol from '../components/rol'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <div>

      <main className="">
        <Herohome />
        <Infohome />
        <Explhome />
        <Rol />
        <Subscribe />
      </main>
      
    </div>
  )
}
