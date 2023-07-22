import { useContext } from 'react'
import NavBar from '../Navbar'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Container } from './styles'
import { ThemeProvider } from '@emotion/react'

const App = () => {
  const optionsMenu = ['Sobre Mi', 'Proyectos', 'CV']
  const { currentTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <NavBar options={optionsMenu} />
      </Container>
    </ThemeProvider>
  )
}

export default App
