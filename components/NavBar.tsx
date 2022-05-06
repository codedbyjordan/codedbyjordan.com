import React from 'react'

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex underline">
        <li className="pr-2">
          <a href="#">projects</a>
        </li>
        <li className="px-2">
          <a href="https://twitter.com/codedbyjordan">twitter</a>
        </li>
        <li className="px-2">
          <a href="https://github.com/codedbyjordan">github</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
