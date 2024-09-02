import styled from '@emotion/styled'

export const WorkExperience = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 50%;
    gap: 10px;
    @media (max-width: 920px) {
        grid-template-columns: 100%;
    }
`

export const ContainerInfoJob = styled.div`
`

export const ContainerDescriptionJob = styled.div`
     border-left: 2px solid #bbbbbb; 
`

export const DotTimeLine = styled.div`
    position: relative;
    left: -9px;
    top: 0;
    width: 16px;
    height: 16px;
    background-color: #D64550;
    border-radius: 50%;
    // border: 2px solid #202020;
`

export const NameCompany = styled.h3`
    color: #D64550;
    font-size: 23px;
    margin: 0;
    margin-top: 35px;
    padding: 0;

`
export const DescriptionJob = styled.p`
    margin-left: 20px;
`
