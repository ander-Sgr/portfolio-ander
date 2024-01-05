import React from 'react'
import {
  CardContainer,
  ContentWrapper,
  Headline,
  SubHeadline,
  ProjectDescription,
  ImageContainer,
  Image,
  ButtonProject,
  ButtonSourceCode,
  ImageTech,
  ContainerButtons
} from './styles'
import jsIcon from './svgs/js.svg'
import minesweeperImg from './images/minesweeper.png'
import htmlIcon from './svgs/html.svg'
import cssIcon from './svgs/css.svg'
import playwrightIcon from './svgs/playwright.svg'

const CardProject = ({ imgProject, title, iconTech = [], descrip, urlProject, urlCode }) => {
  const renderImage = (nameImage) => {
    const images = {
      minesweeper: minesweeperImg,
      js: jsIcon,
      html: htmlIcon,
      css: cssIcon,
      playwright: playwrightIcon

    }
    if (Array.isArray(nameImage)) {
      const icons = nameImage.map((tech, index) => {
        let icon = null

        if (images[tech]) {
          icon = images[tech]
        }
        return { icon, index }
      })
      return icons.map(({ key, icon, index }) => (
        icon == null ? <React.Fragment key={index} /> : <ImageTech key={index} src={icon} alt={`Tech Icon ${index}`} />
      ))
    } else {
      let imgCard = null
      if (images[imgProject]) {
        imgCard = images[imgProject]
      }
      return imgCard
    }
  }

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={renderImage(imgProject)} />
      </ImageContainer>
      <ContentWrapper>
        <Headline>{title}</Headline>
        <SubHeadline>
          {renderImage(iconTech)}
        </SubHeadline>
        <ProjectDescription>{descrip}</ProjectDescription>
      </ContentWrapper>
      <ContainerButtons>
        <ButtonProject href={urlProject} target='_blank'>Ver Proyecto</ButtonProject>
        <ButtonSourceCode href={urlCode} target='_blank'>Código Fuente</ButtonSourceCode>
      </ContainerButtons>
    </CardContainer>
  )
}

export default CardProject
