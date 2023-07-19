import React, { useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { theme } from '../styles'

export const DarkThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme.dark)

  const changeTheme = () => {
    setCurrentTheme(currentTheme === theme.dark ? theme.ligth : theme.dark)
  }
  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
