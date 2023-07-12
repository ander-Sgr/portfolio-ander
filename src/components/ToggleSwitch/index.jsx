import React from 'react'
import sunIcon from './icons/sunIcon.svg'
import moonIcon from './icons/moonIcon.svg'
import { Label, SunIcon, MoonIcon, BallSwitch } from './styles'

const ToggleSwitch = () => {
  return (
    <Label>
      <SunIcon src={sunIcon} alt='sunIcon' />
      <MoonIcon src={moonIcon} alt='moonIcon' />
      <BallSwitch />
    </Label>
  )
}

export default ToggleSwitch
