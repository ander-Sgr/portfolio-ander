import styled from '@emotion/styled'

export const ContainerIntro = styled.div`
   margin: 0 auto;
   padding-top: 18px;
   width: 70%;
   @media (max-width: 920px) {
    width: 70%;
    padding-top: 18px;
   }
   @media (max-width: 650px) {
    width: 90%;
    padding-top: 18px;
   }
`

export const IntroText = styled.h1`
    font-family: ${(props) => props.theme.fonts.lexendFont};
    color: ${(props) => props.theme.foreground};
    font-size: 72px;
    margin-bottom: 14px;
    @media (max-width: 550px) {
        font-size: 62px;
        margin-top: 0px;
    }
`
export const SubTitle = styled(IntroText)`
    font-size: 35px;
    color: #D64550;
    margin: 0;
    @media (max-width: 550px) {
        font-size: 32px;
    }
`
export const LineSeparator = styled.div`
    width: 100%;
    padding-top: 1px;
    margin-top: 13px;
    background-color: #bbbbbb;
`
export const ContainerContact = styled.div`
    display: grid;
    padding-bottom: 15px;
    grid-template-columns: repeat(auto-fill, 140px);
    gap: 18px;
    align-items: center;
    text-align: center;
`
export const Contact = styled.a`
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 8px;
    gap: 8px;
    background-color: ${(props) => props.theme.backgroundButton};
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.foreground};
    

`
export const ContactImage = styled.img`
    width: 20%;
`
export const DescriptionContainer = styled.div`
    font-size: 20px;
    padding: 10px 0px 25px 0px;
    width: 60%;

    @media (max-width: 920px) {
        width: 70%;
    }
   @media (max-width: 650px) {
         width: 90%;
    }
`
