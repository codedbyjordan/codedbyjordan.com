import React from 'react'
import NavBar from './NavBar'

const Header: React.FC = () => {
  return (
    <header className="w-full text-left my-8 flex items-center pt-24 font-sf-pro">
      <div>
        <h1 className="text-5xl font-semibold pb-4">hi, i'm jordan</h1>
        <NavBar></NavBar>
      </div>
      <img
        src="me.webp"
        alt="Picture of Jordan Baron"
        className="rounded-full w-1/5 ml-auto"
      />
    </header>
  )
}

export default Header
