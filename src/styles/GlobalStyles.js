import { Global, css } from '@emotion/react'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const GlobalStyles = () => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <Global
      styles={css`
            body {
                background-color: ${currentTheme.backgroundBody};
                color: ${currentTheme.foregound};
            }
        `}
    />
  )
}
