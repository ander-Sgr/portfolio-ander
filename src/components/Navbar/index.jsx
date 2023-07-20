import React from 'react'
import { Nav, ListNav, NavLi, NavLink, LogoContainer } from './styles'
import ToggleSwitch from '../ToggleSwitch'
import HamburgerIcon from '../HamburgerIcon'

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
        <NavLi>
          <ToggleSwitch />
        </NavLi>
        <NavLi>
          <HamburgerIcon />
        </NavLi>
      </ListNav>

    </Nav>
  )
}

export default NavBar
