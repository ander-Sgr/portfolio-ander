import styled from '@emotion/styled/macro'

export const Label = styled.label`
   background-color: #111;
   width: 50px;
   height: 22px;
   border-radius: 50px;
   position: relative;
   padding: 5px;
   cursor: pointer;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const BallSwitch = styled.span`
  ${Label} & {
    background-color: #fff;
    width: 26px;
    height: 26px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }
`

const IconBase = styled.img`
    width: 14px;
`

export const SunIcon = styled(IconBase)`
  
`
export const MoonIcon = styled(IconBase)`
`
