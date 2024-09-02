import { useContext } from 'react'
import NavBar from '../Navbar'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ThemeProvider } from '@emotion/react'
import AboutMe from '../../pages/aboutMe'
import Projects from '../../pages/projects'
import Experience from '../../pages/experience'

const App = () => {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={currentTheme}>
      <NavBar />
      <AboutMe />
      <Experience />
      <Projects />
    </ThemeProvider>
  )
}

export default App
