import React from 'react'
import CardProject from '../../components/CardProject'
import { Container, HeadLine } from './styles'
import IconProyect from './svg/IconProyect.svg'

const Projects = () => {
  const stackMinesweeper = ['js', 'html', 'css', 'playwright']
  const stackPostApp = ['laravel', 'html', 'css']

  return (

    <Container>
      <HeadLine><img src={IconProyect} alt='icon proyect' /> Proyectos</HeadLine>
      <CardProject
        imgProject='postApp'
        title='Post App'
        iconTech={stackPostApp}
        descrip='Esta aplicación fue realizada con fines prácticos, se hizo uso del base de datos realacional
        así como la creación de factorias, migraciciones y poblacion de la base de datos con datos mock. Todo esto hecho con
        Laravel, HTML, CSS y como base de datos HeidiSQL'
        urlCode='https://github.com/ander-Sgr/posts-app'
        urlProject='https://posts-app-production-f496.up.railway.app/'
      />
    </Container>
  )
}

export default Projects
