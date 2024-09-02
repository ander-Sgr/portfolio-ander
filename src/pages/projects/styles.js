import styled from '@emotion/styled'
import { ReactComponent as IconProyectSVG } from './svg/IconProyect.svg'

export const StyledIconProyect = styled(IconProyectSVG)`
  fill: ${(props) => props.theme.foreground};
  margin-right: 10px;
  width: 24px;
  height: 24px;
`

export const Container = styled.div`
    margin: 0 auto;
    width: 70%;
    @media (max-width: 920px) {
      width: 77%;
    }
`

export const HeadLine = styled.h2`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    color: ${(props) => props.theme.foreground};
    margin-bottom: 25px;
`
