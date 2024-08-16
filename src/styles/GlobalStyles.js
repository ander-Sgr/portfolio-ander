import { Global, css } from '@emotion/react'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const GlobalStyles = () => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <Global
      styles={css`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden; /* Evita el desplazamiento horizontal */
        }

        body {
          min-height: 100vh; /* Asegura que el body cubra al menos la altura de la ventana */
          background: ${currentTheme.backgroundBody};
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover; /* Ajusta el fondo para cubrir toda la pantalla */
          color: ${currentTheme.foreground};
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          display: flex;
          flex-direction: column;
        }
      `}
    />
  )
}
