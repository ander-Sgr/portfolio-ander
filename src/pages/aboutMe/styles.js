import styled from '@emotion/styled'

export const ContainerIntro = styled.div`
    margin-left: 125px;
`

export const IntroText = styled.h1`
    font-family: ${(props) => props.theme.fonts.lexendFont};
    color: ${(props) => props.theme.foreground};
    font-size: 100px;
`
export const SubTitle = styled(IntroText)`
    font-size: 42px;
    color: #FF2626;
    line-height: 0.5;
`
export const LineSeparator = styled.div`
    width: 641px;
    padding: 1px;
    background-color: #FFFFFF;
`
