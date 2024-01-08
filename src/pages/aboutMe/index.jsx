import React from 'react'
import { ContainerIntro, IntroText, LineSeparator, SubTitle } from './styles'

const AboutMe = () => {
  return (
    <ContainerIntro>
      <IntroText>Hey, Soy <br /> Anderson
        <SubTitle>Web Developer</SubTitle>
      </IntroText>
      <LineSeparator />
    </ContainerIntro>
  )
}

export default AboutMe
