import styled from '@emotion/styled'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fonts.size};
  font-family: ${(props) => props.theme.fonts.body};
  background: ${(props) => props.theme.background};
  height: 5.255rem;
`

export const ListNav = styled.ul`
  list-style-type: none;
  flex-direction: column;
  background: ${(props) => props.theme.background};
  padding: 1rem;
  display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};

  @media (min-width: 910px) {
    padding: 0;
    display: flex; 
  }

`

export const NavLi = styled.li`
  margin: 0 1.4rem;
  
  color: ${(props) => props.theme.foreground};
`

export const NavLink = styled.a`
  color: ${(props) => props.theme.foreground};
  list-style-type: none;
  text-decoration: none;

  @media (max-width: 910px) {
    display: flex;
    justify-content: left;
    align-items: left;
    text-align: center;
    margin: 0.5rem 0;
  }
`

export const LogoContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.logoFont};
`

export const Logo = styled.a`
  color: ${(props) => props.theme.foreground};
  text-decoration: none;
  margin-left: 8rem;

  @media (max-width: 910px) {
    margin-left: 1.25rem;

  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8rem;

  
  @media (max-width: 910px) {
    flex-direction: column;
    position: fixed;
    margin-right: 0rem;
    background: ${(props) => props.theme.background};
    top: 60px;
    right: 0;
    bottom: 0;
    width: 55%;
    z-index: 1;
  }
`
