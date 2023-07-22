import React, { useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { theme } from '../styles'

export const DarkThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme.dark)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme))
    }
  }, [])

  const changeTheme = () => {
    // setCurrentTheme(currentTheme === theme.dark ? theme.ligth : theme.dark)
    setCurrentTheme((prevTheme) =>
      prevTheme === theme.dark ? theme.ligth : theme.dark
    )
  }
  // TO DO save the theme in the locaLStorage..
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme))
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
