import React, { useState } from 'react'
import { Nav, ListNav, NavLi, NavLink, LogoContainer, Logo, Options } from './styles'
import ToggleSwitch from '../ToggleSwitch'
import HamburgerIcon from '../HamburgerIcon'

const NavBar = ({ options }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOnClickMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <Nav>
      <LogoContainer>
        <Logo to='/'>&#60;Ander&#47;&#62;</Logo>
      </LogoContainer>
      <ListNav isMenuOpen={isMenuOpen}>

        <Options>
          {options.map((option, index) => (
            <NavLink key={index} href={option.replaceAll(' ', '')} onClick={handleMenuItemClick}>
              <NavLi>{option}</NavLi>
            </NavLink>
          ))}
          <NavLi>
            <ToggleSwitch />
          </NavLi>

        </Options>
      </ListNav>
      <HamburgerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={handleOnClickMenuOpen} />

    </Nav>
  )
}

export default NavBar
