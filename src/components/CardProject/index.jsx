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
  ButtonSourceCode
} from './styles'
import jsIcon from './svgs/js.svg'
import minesweeperImg from './images/minesweeper.png'

const CardProject = ({ imgProject, title, iconTech = [], descrip, urlProject, urlCode }) => {
  const renderImage = (nameImage) => {
    const images = {
      minesweeper: minesweeperImg,
      js: jsIcon
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
        icon == null ? <React.Fragment key={index} /> : <img key={index} src={icon} alt={`Tech Icon ${index}`} />
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
      <ContentWrapper>
        <ImageContainer>
          <Image src={renderImage(imgProject)} />
        </ImageContainer>
        <Headline>{title}</Headline>
        <SubHeadline>
          {renderImage(iconTech)}
        </SubHeadline>
        <ProjectDescription>{descrip}</ProjectDescription>
      </ContentWrapper>
      <div>
        <ButtonProject href={urlProject}>Ver Proyecto</ButtonProject>
        <ButtonSourceCode href={urlCode}>Código Fuente</ButtonSourceCode>
      </div>
    </CardContainer>
  )
}

export default CardProject
