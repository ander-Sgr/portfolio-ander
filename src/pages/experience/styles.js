import styled from '@emotion/styled'
import { ReactComponent as IconJobSVG } from './svgs/iconjob.svg'

export const StyledIconJobs = styled(IconJobSVG)`
     fill: ${(props) => props.theme.foreground};
     margin-right: 10px;
     width: 24px;
     height: 24px;
`

export const ExperienceContainer = styled.section`
    margin: 0 auto;
    width: 70%;
    padding-top: 50px;
    @media (max-width: 920px) {
        width: 70%;
        padding-top: 18px;
   }
   @media (max-width: 650px) {
        width: 90%;
        padding-top: 18px;
   }
`
export const Ttile = styled.h2`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    color: ${(props) => props.theme.foreground};
`
