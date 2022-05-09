import React from 'react'
import NavItem from './NavItem'

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex text-center md:text-xl md:pt-2 font-inter">
        <NavItem href="#projects">projects</NavItem>
        <NavItem href="#timeline">timeline</NavItem>
        <NavItem href="https://twitter.com/codedbyjordan">twitter</NavItem>
        <NavItem href="https://github.com/codedbyjordan">github</NavItem>
      </ul>
    </nav>
  )
}

export default NavBar
