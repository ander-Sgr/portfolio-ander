import styled from '@emotion/styled'

export const Container = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 425px);
  grid-template-rows: auto auto;
  margin-top: 140px;
  justify-content: center;
  
`

export const HeadLine = styled.h1`
  grid-column: 1 / -1; /* Establecer el elemento en todas las columnas */
  color: ${(props) => props.theme.foreground};
  text-align: center; /* Centrar el texto horizontalmente */
`
