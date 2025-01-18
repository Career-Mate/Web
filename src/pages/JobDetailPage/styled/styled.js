import styled from 'styled-components'
export const PageContainer = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: center;
`

export const ComponentContainer = styled.div`
    position: relative;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    padding: 0 40px;
    width: 75%;
    margin-top: 40px;
`

export const ImgWrapper = styled.div`
    width : inherit;
    height : 542px;
    border-radius: 20px;
    background-color: black;
    position: relative;
    overflow: hidden;
    z-index: 1;

`
export const StyledImg = styled.img`
    width: auto;
    height: auto;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const StyledImgOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width : 100%;
    height : 100%;
    border-radius: inherit;
    background-color: #000000;
    opacity: 0.4;
    z-index: 1;
`
export const ImgTextWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    left: 30px;
    
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    width: fit-content;
    height: fit-content;
    color: white;
    z-index: 2;
`
export const ImgTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 20px;
`
export const ImgTitle = styled.span`
    font-size: 36px;
    font-weight: 800;
`
export const Hyperlink = styled.a`
    text-decoration: underline;
    font-weight: 400;
    color: #F7F8F9;
`

export const ImgText = styled.span`
    font-size: 20px;
    font-weight: 400;
`

export const SummaryWrapper = styled.div`
    width: inherit;
    height: fit-content;
    box-shadow: 0px 0px 10px 0px #00000040;
    box-shadow: 0px 0px 7px 0px #00000040 inset;
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #C4C4C4;

    position: relative;
    margin-top: -15px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: start;

    box-sizing: border-box;
    padding: 0 40px;

`
export const SummaryTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;

    width: fit-content;
    height: fit-content;

    box-sizing: border-box;
    padding-bottom: 52px;
    padding-top: 70px;
    padding-left: 29px;
    padding-right: 29px;
    border-bottom: 3px solid #EFEFEF;

`
export const Highlight = styled.span`
    font-weight: 700;
    font-size: inherit;
    color: inherit;
`;
export const SummaryTitle = styled.span`
    font-size: 23px;
    font-weight: 400;
`
export const SummaryText = styled.span`
    font-size: 20px;
    font-weight: 400;
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    width: inherit;
    height: fit-content;

    box-sizing: border-box;
    padding: 40px 20px 60px 20px;
`

export const ButtonWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 107px;
    margin-bottom: 209px;
`
