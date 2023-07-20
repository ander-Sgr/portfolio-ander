import React, { useContext, useEffect, useState } from 'react'
import sunIcon from './icons/sunIcon.svg'
import moonIcon from './icons/moonIcon.svg'
import {
  Label,
  SunIcon,
  MoonIcon,
  BallSwitch,
  ContainerSwitch,
  CheckBox
} from './styles'
import { ThemeContext } from '../../contexts/ThemeContext'

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { changeTheme } = useContext(ThemeContext)

  const handleOnchangeCheckBox = () => {
    setIsChecked((prevIsChecked) => {
      localStorage.setItem('toggleChecked', JSON.stringify(!prevIsChecked))
      return !prevIsChecked
    })
    changeTheme()
  }

  useEffect(() => {
    const storedState = localStorage.getItem('toggleChecked')
    if (storedState) {
      setIsChecked(JSON.parse(storedState))
    }
  }, [])

  return (
    <ContainerSwitch>
      <CheckBox
        id='toggle'
        type='checkbox'
        checked={isChecked}
        onChange={handleOnchangeCheckBox}
      />
      <Label htmlFor='toggle'>
        <MoonIcon src={moonIcon} alt='moonIcon' />
        <SunIcon src={sunIcon} alt='sunIcon' />
        <BallSwitch isChecked={isChecked} />
      </Label>
    </ContainerSwitch>

  )
}

export default ToggleSwitch
