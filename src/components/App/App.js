import { useContext } from 'react'
import NavBar from '../Navbar'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Container } from './styles'
import { ThemeProvider } from '@emotion/react'

const App = () => {
  const optionsMenu = ['Sobre Mi', 'Proyectos', 'CV']
  const { currentTheme, changeTheme } = useContext(ThemeContext)
  const handleButtonClick = () => {
    changeTheme() // Cambiar el tema al hacer clic en el botón
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <NavBar options={optionsMenu} />
      <Container>holaaa</Container>
      <button onClick={handleButtonClick}>Cambiar Tema</button>
    </ThemeProvider>
  )
}

export default App
