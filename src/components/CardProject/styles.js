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
  margin: 0px 25px 0px 25px;
 
`

export const ImageContainer = styled.div`
  background-color: #1B1B1B;
  display: flex;
  justify-content: center;

  padding: 14px 0px 14px 0px;
 
`

export const Image = styled.img`
  width: 50%;
  border-radius: 3px;
`

export const Headline = styled.h2`
  color: ${colors.red};
  margin-bottom: 10px;
  font-size: 30px;
`

export const SubHeadline = styled.h3`
  color: ${colors.white};
  margin-bottom: 10px;
`

export const ProjectDescription = styled.p`
overflow: auto; /* Agregar scroll cuando el texto es largo */
  max-height: 180px; /* Altura máxima para el párrafo */
  margin-bottom: 10px; /* Espacio en la parte inferior */
`

export const ImageTech = styled.img`
  width: 28px;  
  padding-right: 15px;
 
`
export const ContainerButtons = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, 147px);
  margin-top: 80px;
`

const ButtonStyle = styled.a`
  text-align: center;
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
  grid-column: 1 / 2;
  background-color: ${colors.red};

`

export const ButtonSourceCode = styled(ButtonStyle)`
  grid-column: 2 / 2;
  background-color: #323232;

`
