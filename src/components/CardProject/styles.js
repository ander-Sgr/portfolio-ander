import styled from '@emotion/styled'

export const CardContainer = styled.div`
  display: grid;
  gap: 10px;
  border: 2px solid;
  background-color: #ffffff;
  color: #000000;
`

export const CardImageContainer = styled.div`
  width: 100%;
`

export const ImgCard = styled.img`
  width: 100%;
`

export const CardContent = styled.div`
  padding: 10px;
`

export const Headline = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`

export const SubHeadline = styled.h3`
  font-size: 1rem;
  margin: 8px 0;
`

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`

export const CardButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`

const ButtonStyled = styled.a`
  border: 1px solid;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`

export const ButtonProject = styled(ButtonStyled)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`

export const ButtonSourceCode = styled(ButtonStyled)`
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #555e66;
  }
`
