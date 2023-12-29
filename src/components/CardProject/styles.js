import styled from '@emotion/styled'

const colors = {
  red: '#FF2626',
  darkGray: '#151515',
  lightGray: '#030307',
  white: '#FFFFFF',
  darkred: ''
}

export const CardContainer = styled.div`
  background-color: ${colors.darkGray};
  color: ${colors.white};
  border-radius: 8px;
  width: 395px;
  padding: 0px 0px 20px 0px;
  margin: 20px;
  display: flex;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  margin: 0px 25px 0px 25px;
 
`

export const ImageContainer = styled.div`
  background-color: #1B1B1B;
  display: flex;
  justify-content: center;

  padding: 20px 0px 40px 0px;
  @media (min-width: 768px) {

  }
`

export const Image = styled.img`
  width: 70%;
  border-radius: 3px;
`

export const Headline = styled.h2`
  color: ${colors.red};
  margin-bottom: 10px;
  font-size: 30px;
`

export const SubHeadline = styled.h3`
  color: ${colors.lightGray};
  margin-bottom: 10px;
  width: 25px;
`

export const ProjectDescription = styled.p`
  margin-bottom: 20px;
`

const ButtonStyle = styled.a`
color: ${colors.white};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
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
