import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

const fadeRotate = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`

export const SvgContainer = styled.div`
  width: 100% ;
`

export const WavesFrame = styled.svg`
  position: absolute;
  left: 50%;
  top: 10%;
  width: 40%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Text = styled.h1`
position: absolute;
left: 33.4%;
font-size: 140px;
top: 27%;
`

export const VectorLine = styled.path`
  opacity: 0;
  transform-origin: center;
  animation: ${({ delay }) => css`
    ${fadeRotate} 5s ease infinite alternate,
    ${rotate} 5s ease infinite alternate;
    animation-delay: ${delay}s;
  `};
`
