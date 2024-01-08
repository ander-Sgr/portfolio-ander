import React from 'react'
import CardProject from '../../components/CardProject'
import { Container, HeadLine } from './styles'

const Projects = () => {
  const stackMinesweeper = ['js', 'html', 'css', 'playwright']
  const stackPostApp = ['laravel', 'html', 'css']

  return (

    <Container>
      <HeadLine>PROYECTOS</HeadLine>
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
        descrip='Esta aplicación fue realizada con fines prácticos, se hizo uso del base de datos realacional
        así como la creación de factorias, migraciciones y poblacion de la base de datos con datos mock. Todo esto hecho con
        Laravel, HTML, CSS y como base de datos HeidiSQL'
        urlCode='https://github.com/ander-Sgr/posts-app'
      />

    </Container>
  )
}

export default Projects
