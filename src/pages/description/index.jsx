import React from 'react'
import {
  ContainerDescription,
  Title,
  ContainerAboutMe,
  Skills

} from './styles'

const Description = () => {
  return (
    <ContainerDescription>
      <ContainerAboutMe>
        <Title>Sobre Mí</Title>
        <p>Soy Anderson, un apasionado Web Developer con experiencia en diversas tecnologías.</p>

        <p>Actualmente, me estoy formando en la cultura DevOps para redirigir mis habilidades hacia el cloud.
          Mi objetivo es ser parte de un equipo donde pueda seguir creciendo tanto personal como profesionalmente, enfrentando desafíos y resolviendo problemas.
        </p>
        <p>Estoy abierto a nuevas oportunidades que me permitan seguir expandiendo mis habilidades y conocimientos.</p>
      </ContainerAboutMe>
      <Skills>Habilidades</Skills>
      <ul>
        <li><strong>Lenguajes y tecnologías:</strong> HTML5, CSS3, React.js, JavaScript</li>
        <li><strong>DevOps y Cloud:</strong> Terraform, Vagrant, AWS</li>
        <li><strong>Scripting:</strong> Python</li>
      </ul>
    </ContainerDescription>
  )
}

export default Description
