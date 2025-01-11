import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: fit-content;
    width: fit-content;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgWrapper = styled.div`
    width : 1349px;
    height : 542px;
    border-radius: 20px;
    background-color: black;
    position: relative;
    overflow: hidden;
    z-index: 1;
`
export const StyledImg = styled.img`
    width: 100%;
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
export const ImgTitle = styled.span`
    font-size: 36px;
    font-weight: 800;
`
export const ImgText = styled.span`
    font-size: 20px;
    font-weight: 400;
`

export const SummaryWrapper = styled.div`
    width: 1349px;
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
    align-items: center;

`
export const SummaryTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 1200px;
    height: fit-content;
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
    width: 1200px;
    height: fit-content;

    padding-top: 40px;
    padding-bottom: 57px;
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
