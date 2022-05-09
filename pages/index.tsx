import type { NextPage } from 'next'
import Header from '../lib/components/Header'
import { ProjectList } from '../lib/components/Project'
import { Timeline } from '../lib/components/Timeline'

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] font-inter text-white flex justify-center">
      <main className="w-4/5 lg:w-1/3 h-full">
        <Header></Header>

        <ProjectList></ProjectList>
        <Timeline></Timeline>
      </main>
    </div>
  )
}

export default Home
