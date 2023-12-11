import { useContext } from 'react'
import NavBar from '../Navbar'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ThemeProvider } from '@emotion/react'
import AboutMe from '../../pages/aboutMe'

const App = () => {
  const optionsMenu = ['Sobre Mi', 'Proyectos', 'CV']
  const { currentTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={currentTheme}>
      <NavBar options={optionsMenu} />
      <AboutMe />
    </ThemeProvider>

  )
}

export default App
