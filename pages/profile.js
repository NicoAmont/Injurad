import Head from 'next/head'
import Header from '../components//header/Header'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Profile() {
  return (
    <div>
      <main className="flex flex-row m-0 mt-10 relative w-screen">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
      <svg className="w-screen absolute right-0" viewBox="0 0 1440 182" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-384 0H1466V24.0882L-384 182V0Z" fill="#DEE6FF"/>
      </svg>
    </div>
  )
}
