import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#1C1C1C] text-white flex items-center justify-center">
      <main className="w-1/3">
        <header className="w-full text-left my-8">
          <h1 className="text-4xl font-medium">hi, i'm jordan 👋</h1>
          <NavBar></NavBar>
        </header>
        <p>
          I'm an 18 year-old web developer from Virginia using web technologies
          to build web apps
        </p>
      </main>
    </div>
  )
}

export default Home
