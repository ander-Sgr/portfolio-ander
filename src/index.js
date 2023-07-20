import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles'
import { DarkThemeProvider } from './providers'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <DarkThemeProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </DarkThemeProvider>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
