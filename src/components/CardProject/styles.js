import styled from '@emotion/styled'

const colors = {
  red: '#FF2626',
  darkGray: '#151515',
  lightGray: '#030307',
  white: '#FFFFFF',
  darkred: ''
}

export const CardContainer = styled.section`
  background-color: ${colors.darkGray};
  color: ${colors.white};
  border-radius: 8px;
  width: 395px;
  padding: 0px 0px 20px 0px;
  margin: 20px 20px 20px 20px;
  display: flex;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 92px);
  margin: 0px 15px 0px 15px;
`

export const ImageContainer = styled.div`
  background-color: #1B1B1B;
  display: flex;
  justify-content: center;
  padding: 14px 0px 14px 0px;
height: 200px;
 
`

export const Image = styled.img`
  max-width: 70%;
  border-radius: 8px;
`

export const Headline = styled.h1`
  color: ${colors.red};
  font-size: 30px;
`

export const SubHeadlineContainer = styled.div`
  color: ${colors.white};
  padding-bottom: 15px;
`
export const SubHeadline = styled.h2`

`

export const IconsContainer = styled.div``

export const ProjectDescription = styled.p`

`

export const ImageTech = styled.img`
  width: 28px;  
  padding-right: 15px;
 
`
export const ContainerButtons = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, 147px);
  margin-top: 90px;

`

const ButtonStyle = styled.a`
  text-align: center;
  color: ${colors.white};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
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
