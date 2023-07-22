import { keyframes, css } from '@emotion/react'
import styled from '@emotion/styled'

const hamburgerToXAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(180deg) scale(1);
  }
`

export const HamburgerIconSvg = styled.svg`
  width: 25px;
  display: none; /* Hide the hamburger icon on large screens */
  transition: transform 0.3s ease;
  transform-origin: center;

  ${({ isMenuOpen }) => isMenuOpen && css`
    animation: ${hamburgerToXAnimation} 0.3s forwards;
  `}

  @media (max-width: 750px) {
    display: block; /* Show the hamburger icon on small screens */
    cursor: pointer;
    padding-right: 0.5rem;
  }
`
