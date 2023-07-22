import styled from '@emotion/styled'
import { withTheme } from '../../helpers/style.helper'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  ${withTheme('font-size', 'fonts.size')}
  ${withTheme('font-family', 'fonts.body')}
  background: ${props => props.theme.background};
`

export const ListNav = styled.ul`
  list-style-type: none;
  display: flex;

`

export const NavLi = styled.li`
  margin: 0 1.4rem; /* Add space between list items */
  color: ${props => props.theme.foreground};

  @media (max-width: 750px) {
    display: none; /* Hide the list items on small screens */
  }
`

export const NavLink = styled.a`
  color: ${props => props.theme.foreground};
  list-style-type: none;
  text-decoration: none;
  padding: 0.5rem 1rem; /* Add some padding to make links more clickable */

  @media (max-width: 750px) {
    display: block; /* Show the links as block elements on small screens */
    width: 100%; /* Make the links full-width on small screens */
    text-align: center; /* Center the links on small screens */
    margin: 0.5rem 0; /* Add space between links on small screens */
  }
`

export const LogoContainer = styled.div`
  margin-right: 0.5rem; /* Ajusta el margen derecho */
  ${withTheme('font-family', 'fonts.logoFont')}

  @media (min-width: 750px)  and (min-width: 1440px) {
    margin-right: 44rem;  /* Establece un margen vertical en pantallas más pequeñas */
    
  }
  @media (max-width: 750px) {
    padding-right: 5rem;
    font-size: 11px;    
  }
`
