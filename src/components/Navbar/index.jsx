import React, { useEffect, useState } from 'react'
import { Nav, ListNav, NavLi, NavLink, Options } from './styles'
import ToggleSwitch from '../ToggleSwitch'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(true)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])
  return (
    <Nav scrolled={scrolled}>
      <ListNav>
        <Options>
          <NavLi>
            <NavLink
              to='experience'
              spy
              smooth
              offset={-75}
              duration={500}
            >
              Experiencia
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              to='proyects'
              spy
              smooth
              offset={-75}
              duration={500}
            >
              Proyectos
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink href='./cv-anderson-estrella-dev.pdf' target='_blank'>CV</NavLink>
          </NavLi>
          <NavLi>
            <ToggleSwitch />
          </NavLi>
        </Options>
      </ListNav>
    </Nav>
  )
}

export default NavBar
