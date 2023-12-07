import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import { DarkThemeProvider } from './providers'
import { GlobalStyles } from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DarkThemeProvider>
        <GlobalStyles />
        <App />
      </DarkThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
