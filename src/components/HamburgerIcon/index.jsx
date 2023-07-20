import React, { useState } from 'react'
import { HamburgerIconSvg } from './styles'

const HamburgerIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOnClickMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HamburgerIconSvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      onClick={handleOnClickMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <line x1='3' y1='12' x2='21' y2='12' />
      <line x1='3' y1='6' x2='21' y2='6' />
      <line x1='3' y1='18' x2='21' y2='18' />
    </HamburgerIconSvg>
  )
}

export default HamburgerIcon
