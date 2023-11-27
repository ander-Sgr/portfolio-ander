import React from 'react'
import {
  CardContainer,
  CardImageContainer,
  ImgCard,
  CardContent,
  Headline,
  SubHeadline,
  ProjectDescription,
  CardButtonsContainer,
  ButtonProject,
  ButtonSourceCode
} from './styles'

const CardProject = ({ img, title, stack, descrip, urlProject, urlCode }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <ImgCard src='' alt='Imagen del proyecto' />
      </CardImageContainer>
      <CardContent>
        <Headline>Encabezado</Headline>
        <SubHeadline>Subencabezado</SubHeadline>
        <ProjectDescription>Descripción breve del proyecto.</ProjectDescription>
      </CardContent>
      <CardButtonsContainer>
        <ButtonProject href='enlace_al_proyecto'>Ver Proyecto</ButtonProject>
        <ButtonSourceCode href='enlace_al_codigo'>Código Fuente</ButtonSourceCode>
      </CardButtonsContainer>
    </CardContainer>
  )
}

export default CardProject
