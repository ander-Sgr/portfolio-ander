import React from 'react'
import {
  ContainerIntro,
  IntroText,
  LineSeparator,
  SubTitle,
  ContainerContact,
  Contact,
  ContactImage,
  DescriptionContainer
} from './styles'
import linkedinsvg from './svgs/linkedin.svg'
import githubsvg from './svgs/github.svg'

const AboutMe = () => {
  return (
    <ContainerIntro>
      <IntroText>Hey, Soy <br /> Anderson
        <SubTitle>Web Developer</SubTitle>
      </IntroText>
      <DescriptionContainer>
        Apasionado desarrollador web con expriencia práctica,
        Actualmente me estoy redirigiendo mi carrera a la cultura Devops.
      </DescriptionContainer>
      <ContainerContact>
        <Contact href='https://www.linkedin.com/in/anderson-estrella-barreto/' target='_blank'>
          <ContactImage src={linkedinsvg} alt='linkdin logo' /> Linkedin
        </Contact>
        <Contact href='https://github.com/ander-Sgr/' target='_blank'>
          <ContactImage src={githubsvg} alt='github logo' /> Github
        </Contact>
      </ContainerContact>
      <LineSeparator />
    </ContainerIntro>
  )
}

export default AboutMe
