import styled from '@emotion/styled/macro'

export const ContainerSwitch = styled.div`

  align-items: center;
  left: 43px;
`

export const Label = styled.label`
  background-color: #ffff;
  width: 50px;
  height: 22px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 45px;
    height: 14px;
  }
`

export const BallSwitch = styled.span`
   ${Label} > & {
    background-color: #28ca59;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 4px;
    border-radius: 50%;
    transition: transform 0.2s linear;

    @media (max-width: 768px) {
      width: 18px;
      height: 20px;
    }
  }
`

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  &:checked ~ ${Label} > ${BallSwitch}  {
    transform: translateX(${({ isChecked }) => (
      isChecked ? '5px' : '32px'
    )});
  }
`

const IconBase = styled.img`
  width: 13px;
`

export const SunIcon = styled(IconBase)``

export const MoonIcon = styled(IconBase)``
