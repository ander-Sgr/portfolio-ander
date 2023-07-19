import { createContext } from 'react'
import { theme } from '../styles'

export const ThemeContext = createContext({
  theme: theme.dark,
  changeTheme: () => {}
}
)
