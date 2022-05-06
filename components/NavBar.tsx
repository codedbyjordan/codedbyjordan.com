import React from 'react'

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex text-xl">
        <li className="pr-4">
          <a href="#">projects</a>
        </li>
        <li className="px-4">
          <a href="https://twitter.com/codedbyjordan">twitter</a>
        </li>
        <li className="px-4">
          <a href="https://github.com/codedbyjordan">github</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
