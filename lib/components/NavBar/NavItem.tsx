import React from 'react'

interface NavItemType {
  href: string
  children: React.ReactNode
}

const NavItem: React.FC<NavItemType> = ({ href, children }) => {
  return (
    <li className="text-xl py-5 hover:underline">
      <a href={href}>{children}</a>
    </li>
  )
}

export default NavItem
