import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../lib/components/Header'
import { ProjectList } from '../lib/components/Project'
import { Timeline } from '../lib/components/Timeline'

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] font-inter text-white flex justify-center">
      <Head>
        <title>Jordan Baron</title>
        <meta
          name="description"
          content="I'm an 18 year-old web developer exploring web3"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="w-4/5 lg:w-1/3 h-full">
        <Header></Header>

        <ProjectList></ProjectList>
        <Timeline></Timeline>
      </main>
    </div>
  )
}

export default Home
