import styled from '@emotion/styled'

const colors = {
  red: '#FF2626',
  darkGray: '#151515',
  lightGray: '#030307',
  white: '#FFFFFF',
  darkred: ''
}

// Estilos para tu tarjeta utilizando Emotion
export const CardContainer = styled.div`
  background-color: ${colors.darkGray};
  color: ${colors.white};
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 350px;
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
`

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
    max-width: 200px;
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const Headline = styled.h2`
  color: ${colors.red};
  margin-bottom: 10px;
`

export const SubHeadline = styled.h3`
  color: ${colors.lightGray};
  margin-bottom: 10px;
`

export const ProjectDescription = styled.p`
  margin-bottom: 20px;
`

const ButtonStyle = styled.a`
color: ${colors.white};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonProject = styled(ButtonStyle)`
  background-color: ${colors.red};

`

export const ButtonSourceCode = styled(ButtonStyle)`
  background-color: #323232;

`
