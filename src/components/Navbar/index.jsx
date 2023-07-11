import React from 'react'
import { Nav, ListNav, OptionsNav } from './styles'

const NavBar = ({ options }) => {
  return (
    <Nav>
      <ListNav>
        {
        options.map((option, index) => (
          <a key={index} href={option.replaceAll(' ', '')}><OptionsNav>{option}</OptionsNav></a>
        ))
        }
      </ListNav>
    </Nav>
  )
}

export default NavBar
