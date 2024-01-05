import React from 'react'
import CardProject from '../../components/CardProject'
import { Container } from './styles'

const Projects = () => {
  const stack = ['js', 'html', 'css', 'playwright']
  const stackLaravle = ['']

  return (
    <Container>
      <CardProject
        imgProject='minesweeper'
        title='MINESWEEPER'
        iconTech={stack}
        descrip='Este es un proyecto hecho durante mi Internship. Fue realizado para poner a prueba
        mis habilidades en JS, HTML/CSS y en realizar test end-to-end con el uso
        de la biblioteca playwrigth para automatizar los tests'
        urlCode='https://github.com/ander-Sgr/minesweeper'
        urlProject='https://ander-sgr.github.io/minesweeper/src/'
      />
      <CardProject
        imgProject='minesweeper'
        title='MINESWEEPER'
        iconTech={stack}
        descrip='Este proyecto fue hecho para probar mis habilidades en JS HTML Y CSS . Fue realiado durente mi Internship en Travelport'
      />
      <CardProject
        imgProject='minesweeper'
        title='MINESWEEPER'
        iconTech={stack}
      />
    </Container>
  )
}

export default Projects
