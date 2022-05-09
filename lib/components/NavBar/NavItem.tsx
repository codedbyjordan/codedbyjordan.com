import React from 'react'

interface NavItemType {
  link: string
  children: React.ReactNode
}

const NavItem: React.FC<NavItemType> = ({ link, children }) => {
  return (
    <li className="pr-5">
      <a href={link}>{children}</a>
    </li>
  )
}

export default NavItem
