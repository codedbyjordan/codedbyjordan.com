import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#080808] text-white flex justify-center">
      <main className="md:w-1/3">
        <Header></Header>
        <p className="md:text-xl">
          I'm an 18 year-old web developer from Virginia using web technologies
          to build beautiful web apps
        </p>
      </main>
    </div>
  )
}

export default Home
