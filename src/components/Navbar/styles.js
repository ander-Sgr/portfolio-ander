import styled from '@emotion/styled'
import { withTheme } from '../../helpers/style.helper'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  ${withTheme('font-size', 'fonts.size')}
  ${withTheme('background-color', 'colors.darkBlue')}
  ${withTheme('font-family', 'fonts.body')}

`

export const ListNav = styled.ul`
  list-style-type: none;
  display: inline-flex;

`

export const NavLi = styled.li`
  margin: 5px auto;
  padding: 0px 45px;
  ${withTheme('color', 'colors.witheColor')}


`

export const NavLink = styled.a`
  ${withTheme('color', 'colors.witheColor')}
  list-style-type: none;
  text-decoration: none;
 

`
export const LogoContainer = styled.div`
   margin-right: 550px;
`
