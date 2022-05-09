import React from 'react'
import { NavBar } from './NavBar'

const Header: React.FC = () => {
  return (
    <header className="w-full text-left my-8 flex items-center pt-24 font-sf-pro">
      <div>
        <div className="flex items-center pb-4">
          <h1 className="text-3xl md:text-5xl font-semibold pr-2">
            hi, i'm jordan
          </h1>
          <img src="wave.webp" className="w-8 md:w-14" alt="Wave Emoji" />
        </div>
        <NavBar></NavBar>
      </div>
      <img
        src="me.webp"
        alt="Picture of Jordan Baron"
        className="rounded-full w-[30%] md:w-1/5 ml-auto"
      />
    </header>
  )
}

export default Header
