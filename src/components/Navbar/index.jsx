import React from 'react'
import { Nav, ListNav, NavLi, NavLink, LogoContainer, Logo, Options, StyledCharacter, LogoText, StyledClosingBracket } from './styles'
import ToggleSwitch from '../ToggleSwitch'

const NavBar = ({ options }) => {
  return (
    <Nav>
      <ListNav>
        <Options>
          {options.map((option, index) => (
            <NavLink key={index} href={option.replaceAll(' ', '')}>
              <NavLi>{option}</NavLi>
            </NavLink>
          ))}
          <NavLi>
            <ToggleSwitch />
          </NavLi>
        </Options>
      </ListNav>
    </Nav>
  )
}

export default NavBar
