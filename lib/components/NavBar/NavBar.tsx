import React from 'react'
import NavItem from './NavItem'

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex md:text-xl md:pt-1">
        <NavItem link="#">projects</NavItem>
        <NavItem link="https://twitter.com/codedbyjordan">twitter</NavItem>
        <NavItem link="https://github.com/codedbyjordan">github</NavItem>
      </ul>
    </nav>
  )
}

export default NavBar
