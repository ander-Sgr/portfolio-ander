import React from 'react'
import {
  ContainerDescription,
  Title,
  ContainerAboutMe,
  Skills,
  GridSkills,
  Item,
  HeaderSkill,
  Content

} from './styles'
import IconsStack from '../../components/IconsStack'

const Description = () => {
  const langaugeTechs = ['html', 'css', 'js']

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
      <GridSkills>
        <Item fullWidth>
          <Skills>Habilidades</Skills>
        </Item>
        <Item>
          <HeaderSkill>Lenguajes y tecnologías</HeaderSkill>
          <Content>
            <IconsStack
              iconTech={langaugeTechs}
              sizeIcon='80px'
            />
          </Content>
        </Item>
        <Item>
          <HeaderSkill>DevOps y Cloud</HeaderSkill>
          <Content>Terraform, Vagrant, AWS</Content>
        </Item>
      </GridSkills>
    </ContainerDescription>
  )
}

export default Description
