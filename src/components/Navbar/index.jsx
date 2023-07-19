import React from 'react'
import { Nav, ListNav, NavLi, NavLink, LogoContainer } from './styles'
import ToggleSwitch from '../ToggleSwitch'

const NavBar = ({ options }) => {
  return (
    <Nav>
      <LogoContainer>
        <NavLink>{'<--'}AnderDev{'!-->'}</NavLink>
      </LogoContainer>
      <ListNav>
        {
        options.map((option, index) => (
          <NavLink key={index} href={option.replaceAll(' ', '')}>
            <NavLi>{option}</NavLi>
          </NavLink>
        ))
        }
        <ToggleSwitch />

      </ListNav>

    </Nav>
  )
}

export default NavBar
