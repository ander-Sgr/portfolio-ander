import styled from '@emotion/styled'

const colors = {
  red: '#F84550',
  darkGray: '#151515',
  lightGray: '#030307',
  white: '#FFFFFF',
  darkred: ''
}

export const CardContainer = styled.section`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30% 53%;
    gap: 30px; 
    @media (max-width: 920px) {
      grid-template-columns: 100%;
    }
    margin-bottom: 30px;
`

export const ContentWrapper = styled.div`
  
`

export const ImageContainer = styled.div`
`

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
`

export const Headline = styled.h1`
  color: ${colors.red};
  font-size: 30px;
  margin: 0;
  padding: 0;
`

export const SubHeadline = styled.h2`
  margin: 0;
  padding: 0;

`

export const ProjectDescription = styled.p`
  margin: 0;
  padding: 0;
`

export const ContainerButtons = styled.div`
  display: grid;
  padding-bottom: 15px;
  grid-template-columns: repeat(auto-fill, 130px);
  gap: 18px;
  align-items: center;
  position: relative;
  padding-top: 40px;
  text-align: center;
`

const ButtonStyle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  gap: 8px;
  background-color: #162435;
  cursor: pointer;
  text-decoration: none;
  color: #FFFF;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonProject = styled(ButtonStyle)`
`

export const ButtonSourceCode = styled(ButtonStyle)`
`
