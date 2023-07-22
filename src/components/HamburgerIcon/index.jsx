import React from 'react'
import { HamburgerIconSvg } from './styles'

const HamburgerIcon = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <HamburgerIconSvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      {isMenuOpen
        ? (
          <>
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </>
          )
        : (
          <>
            <line x1='3' y1='12' x2='21' y2='12' />
            <line x1='3' y1='6' x2='21' y2='6' />
            <line x1='3' y1='18' x2='21' y2='18' />
          </>
          )}
    </HamburgerIconSvg>
  )
}

export default HamburgerIcon
