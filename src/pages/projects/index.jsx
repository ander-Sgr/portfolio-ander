import React from 'react'
import CardProject from '../../components/CardProject'
import { Container } from './styles'

const Projects = () => {
  const stackMinesweeper = ['js', 'html', 'css', 'playwright']
  const stackPostApp = ['']

  return (
    <Container>
      <CardProject
        imgProject='minesweeper'
        title='MINESWEEPER'
        iconTech={stackMinesweeper}
        descrip='Este es un proyecto hecho durante mi Internship. Fue realizado para poner a prueba
        mis habilidades en JS, HTML/CSS y en realizar test end-to-end con el uso
        de la biblioteca playwright para automatizar los tests'
        urlCode='https://github.com/ander-Sgr/minesweeper'
        urlProject='https://ander-sgr.github.io/minesweeper/src/'
      />
      <CardProject
        imgProject='postApp'
        title='POST-APP'
        iconTech={stackPostApp}
        descrip='Con la creación de esta aplicación'
      />
      <CardProject
        imgProject='minesweeper'
        title='LOL-TRACKER-GG'

      />
    </Container>
  )
}

export default Projects
