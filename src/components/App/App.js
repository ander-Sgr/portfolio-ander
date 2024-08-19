import { useContext } from 'react'
import NavBar from '../Navbar'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ThemeProvider } from '@emotion/react'
import AboutMe from '../../pages/aboutMe'
import Projects from '../../pages/projects'
import Description from '../../pages/description'
import Experience from '../../pages/experience'

const App = () => {
  const optionsMenu = ['Experiencia', 'Proyectos', 'CV']
  const { currentTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={currentTheme}>
      <NavBar options={optionsMenu} />
      <AboutMe />
      <Experience />
    </ThemeProvider>
  )
}

export default App
