import styled from '@emotion/styled'
import { withTheme } from '../../helpers/style.helper'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  ${withTheme('font-size', 'fonts.size')}
  ${withTheme('background-color', 'colors.darkBlue')}
  ${withTheme('font-family', 'fonts.body')}

  background-color: ${props => props.theme.background};

  @media (max-width: 750px) {
    display: none;
  }

`

export const ListNav = styled.ul`
  list-style-type: none;
  display: inline-flex;

`

export const NavLi = styled.li`
  margin: 0.313rem auto;
  padding: 0rem 2.813rem;
  ${withTheme('color', 'colors.witheColor')}
 


`

export const NavLink = styled.a`
  color: ${props => props.theme.foreground};
  list-style-type: none;
  text-decoration: none;
`
export const LogoContainer = styled.div`
   margin-right: 34.375rem;
`

export const HamburgerIcon = styled.img`
  width: 25px;
  
`
