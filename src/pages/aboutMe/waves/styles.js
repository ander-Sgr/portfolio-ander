import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

export const WavesFrame = styled.svg`
  position: fixed;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  height: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }
`
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

export const VectorLine = styled.path`
  opacity: 0;
  transform-origin: center;
  animation: ${({ delay }) => css`
    ${fadeRotate} 5s ease infinite alternate,
    ${rotate} 5s ease infinite alternate;
    animation-delay: ${delay}s;
  `};
`
