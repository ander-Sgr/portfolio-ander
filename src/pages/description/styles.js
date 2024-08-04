import styled from '@emotion/styled'

const colors = {
  red: '#F84550',
  darkGray: '#1B1B1B'
}

export const ContainerDescription = styled.section`
    margin: 0 auto;
    color: ${(props) => props.theme.foreground};
  //  border: 2px solid red;
`
export const ContainerAboutMe = styled.div`
    margin: 40px auto;
    padding: 20px;
    width: 80%;
    background-color: ${colors.darkGray};
    color: ${(props) => props.theme.foreground};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    line-height: 1.6;
`

export const Title = styled.h2`
    color: ${colors.red};
    font-size: 30px;
`
export const Skills = styled(Title)`
  font-size: 30px;
  text-align: center;
  margin: 40px auto;


`
