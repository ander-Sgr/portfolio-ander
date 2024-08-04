import styled from '@emotion/styled'

export const IconsContainer = styled.div`
  ${props => props.customStyles && props.customStyles}
`

export const ImageTech = styled.img`
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
  padding: 10px;
`
