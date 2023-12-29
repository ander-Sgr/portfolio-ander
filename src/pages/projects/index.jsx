import React from 'react'
import CardProject from '../../components/CardProject'
import { Container } from './styles'

const Projects = () => {
  const stack = ['js', 'html']

  return (
    <Container>
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
      <CardProject
        imgProject='minesweeper'
        title='MINESWEEPER'
        iconTech={stack}
      />
    </Container>
  )
}

export default Projects
