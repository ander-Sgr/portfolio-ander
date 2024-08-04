import React from 'react'
import {
  CardContainer,
  ContentWrapper,
  Headline,
  SubHeadlineContainer,
  SubHeadline,
  ProjectDescription,
  ImageContainer,
  Image,
  ButtonProject,
  ButtonSourceCode,
  ContainerButtons
} from './styles'

import IconsStack from '../IconsStack'

import minesweeperImg from './images/minesweeper.png'
import postAppImg from './images/post-app.png'

const CardProject = ({ imgProject, title, iconTech = [], descrip, urlProject, urlCode }) => {
  const renderImage = () => {
    const images = {
      minesweeper: minesweeperImg,
      postApp: postAppImg
    }
    let imgCard = null
    if (images[imgProject]) {
      imgCard = images[imgProject]
    }
    return imgCard
  }
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={renderImage(imgProject)} />
      </ImageContainer>
      <ContentWrapper>
        <Headline>{title}</Headline>
        <SubHeadlineContainer>
          <SubHeadline>Stack Usado</SubHeadline>
          <IconsStack iconTech={iconTech} />
        </SubHeadlineContainer>
        <ProjectDescription>{descrip}</ProjectDescription>
        <ContainerButtons>
          <ButtonProject href={urlProject} target='_blank'>Ver Proyecto</ButtonProject>
          <ButtonSourceCode href={urlCode} target='_blank'>Código Fuente</ButtonSourceCode>
        </ContainerButtons>
      </ContentWrapper>
    </CardContainer>
  )
}

export default CardProject
