import styled from '@emotion/styled'
import { Link as NavLinkScroll } from 'react-scroll'

export const Nav = styled.nav` 
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  justify-content: center;
  font-size: ${(props) => props.theme.fonts.size};
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.scrolled ? '' : props.theme.backgroundNav};
  width: 25%;
  height: 40px;
  top: 5px;
  position: sticky;
  position: -webkit-sticky;
  border-radius: 40px;
  transition: 500ms ease;
  z-index: 10;
  @media (max-width: 1440px) {
    width: 30%;
  }
  @media (max-width: 1255px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 50%; 
  }

  @media (max-width: 768px) {
    width: 60%; 
  }

  @media (max-width: 576px) {
    width: 75%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }

`

export const ListNav = styled.ul`
  list-style-type: none;
  background: ${(props) => props.theme.background};
`

export const NavLi = styled.li`
  color: ${(props) => props.theme.foreground};
  padding-right: 50px;
  @media (max-width: 510px) {
    padding-right: 24px;
  }
`

export const NavLink = styled.a`
  color: ${(props) => props.theme.foreground};
  list-style-type: none;
  text-decoration: none;
  cursor: pointer;

  &:hover, &:focus {
    color: ${(props) => props.theme.hoverNav};
  }

  @media (max-width: 510px) {
    font-size: 14px;
  }

  &.active {
    color: ${(props) => props.theme.hoverNav};
  }
`

export const NavLinkScrollStyled = styled(NavLinkScroll)`
  cursor: pointer;
  
  &:hover, &:focus {
    color: ${(props) => props.theme.hoverNav};
}
`

export const LogoContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.lexendFont};
  padding-right: 50px;
  @media (max-width: 510px) {
    padding-right: 30px;
    padding-left: 0px;
  }
`

export const Logo = styled.a`
  color: ${(props) => props.theme.foreground};
  text-decoration: none;
  font-size: 20px;
`

export const StyledCharacter = styled.span`
  color: #D64550;
`
export const LogoText = styled.span`
  color: #D64550;
`

export const StyledClosingBracket = styled(StyledCharacter)`
  color: #D64550;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.manropeFont};
`
