import { useContext } from 'react'
import NavBar from '../Navbar'
import { ThemeContext } from '../../contexts/ThemeContext'
import { ThemeProvider } from '@emotion/react'
import AboutMe from '../../pages/aboutMe'
import CardProject from '../CardProject'

const App = () => {
  const optionsMenu = ['Sobre Mi', 'Proyectos', 'CV']
  const { currentTheme } = useContext(ThemeContext)

  const stack = ['js', 'html']

  return (

    <ThemeProvider theme={currentTheme}>
      <NavBar options={optionsMenu} />
      <AboutMe />
      <CardProject
        imgProject='minesweeper'
        title='MINESWEEPER'
        iconTech={stack}
      />

    </ThemeProvider>

  )
}

export default App
