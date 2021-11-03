import Head from 'next/head'
import Header from '../components//header/Header'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Profile() {
  return (
    <div>
      <main className="flex flex-row m-0">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}
