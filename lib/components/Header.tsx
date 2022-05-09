import React from 'react'
import { NavBar } from './NavBar'
import Arrow from './Timeline/Arrow'

const Header: React.FC = () => {
  return (
    <header className="w-full h-screen text-center font-baskerville flex justify-center items-center flex-col">
      <div className="flex justify-center">
        <img
          src="me.webp"
          alt="Picture of Jordan Baron"
          className="rounded-full w-[50%] md:w-2/5 self-center"
        />
      </div>
      <div className="flex items-center py-2 text-center">
        <h1 className="text-4xl md:text-5xl pt-4 pb-1 font-bold pr-2">
          hi, i'm jordan
        </h1>
        <img
          src="wave.webp"
          className="w-8 md:w-11 animate-wave"
          alt="Wave Emoji"
        />
      </div>

      <p className="md:text-md text-xl italic pt-2 pb-6">
        i'm an 18 year-old web developer exploring web3
      </p>
      <NavBar></NavBar>
      <div className="pt-24">
        <Arrow></Arrow>
      </div>
    </header>
  )
}

export default Header
