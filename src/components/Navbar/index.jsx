import React, { useState } from 'react'
import { Nav, ListNav, NavLi, NavLink, LogoContainer } from './styles'
import ToggleSwitch from '../ToggleSwitch'
import HamburgerIcon from '../HamburgerIcon'

const NavBar = ({ options }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOnClickMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Nav>
      <LogoContainer>
        <NavLink>
          {'<--'}AnderDev{'!-->'}
        </NavLink>
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
      </ListNav>
      <HamburgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={handleOnClickMenuOpen} />

    </Nav>
  )
}

export default NavBar
