import React from 'react'
import Arrow from './Arrow'
import Year from './Year'

const Timeline: React.FC = () => {
  return (
    <div className="pt-24" id="timeline">
      <h1 className="font-semibold text-4xl pb-2 font-baskerville italic">
        Timeline
      </h1>
      <p>A brief history of my coding journey</p>
      <div className="flex flex-col items-center ">
        <Year
          year="2017"
          events={[
            'Used OctoPrint on a Raspberry Pi to allow students to easily 3D print from a Chromebook',
            'Created a VR game in UE4',
            "Completed MIT's 6.00.1x (Introduction to Computer Science and Programming using Python",
          ]}
        ></Year>
        <Arrow></Arrow>
        <Year
          year="2018"
          events={[
            'Spent my days learning new skills',
            'Built numerous little projects using languages/tools such as Unity, GameMaker, HTML, CSS, PHP, and JavaScript',
          ]}
        ></Year>
        <Arrow></Arrow>
        <Year
          year="2019"
          events={[
            'Took a cybersecurity class at my school',
            'Worked closely with my teacher during and outside school to find my first real bug',
          ]}
        ></Year>
        <Arrow></Arrow>
        <Year
          year="2020"
          events={[
            'Found XSS bugs in Ford and AT&T',
            'Found a CSRF bug in NodeHost that can lead to account takeover'
            'Began learning React and its frameworks',
            'Built a website for my friend’s Team Fortress 2 server',
          ]}
        ></Year>
        <Arrow></Arrow>
        <Year
          year="2021"
          events={[
            'Built projects using React such as a file uploader',
            'Graduated high school with an advanced diploma 🎉',
            'Began learning TypeScript and applying for jobs',
          ]}
        ></Year>
        <Arrow></Arrow>
        <Year
          year="Now (2022)"
          events={[
            'Started learning about web3',
            'Built my first dApp, cryptocurrency, and NFT',
          ]}
        ></Year>
      </div>
    </div>
  )
}

export default Timeline
