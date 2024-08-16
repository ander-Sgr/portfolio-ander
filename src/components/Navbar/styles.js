import styled from '@emotion/styled'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  justify-content: center;
  font-size: ${(props) => props.theme.fonts.size};
  font-family: ${(props) => props.theme.fonts.body};
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
  @media (max-width: 510px) {
    font-size: 14px;
  }

`
/* import font Lexend */
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
  
  @media (max-width: 910px) {

  }
`
