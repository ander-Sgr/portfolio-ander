import React, { useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { theme } from '../styles'

export const DarkThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme.dark.colors)

  const changeTheme = () => {
    // To do save in the localStorage
    // setCurrentTheme(currentTheme === theme.dark ? theme.ligth : theme.dark)
    setCurrentTheme((prevTheme) =>
      prevTheme === theme.dark.colors ? theme.light.colors : theme.dark.colors
    )
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
