import styled from 'styled-components';
import RabbitLogo from '../../../../assets/JobDetailPage/rabbit-logo.svg';
export const PageContainer = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: center;
`;

export const ComponentContainer = styled.div`
    position: relative;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    padding: 0 40px;
    width: 900px;
    margin-top: 40px;

    z-index: 0;
`;

export const ImgWrapper = styled.div`
    width: inherit;
    height: 400px;
    border-radius: 20px;
    background-color: black;
    position: relative;
    overflow: hidden;
    z-index: 1;
`;
export const StyledImg = styled.img`
    width: auto;
    height: auto;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const StyledImgOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: #000000;
    opacity: 0.4;
    z-index: 1;
`;
export const ImgTextWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    width: fit-content;
    height: fit-content;
    color: white;
    z-index: 2;
`;
export const ImgTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;
`;
export const ImgTitle = styled.span`
    font-size: 36px;
    font-weight: 800;
`;
export const Hyperlink = styled.a`
    text-decoration: underline;
    font-weight: 400;
    color: #f7f8f9;
`;

export const ImgText = styled.span`
    font-size: 20px;
    font-weight: 400;
`;

export const SummaryWrapper = styled.div`
    width: inherit;
    height: fit-content;
    box-shadow:
        0px 0px 10px 0px #00000040,
        0px 0px 7px 0px #00000040 inset;
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid #c4c4c4;

    position: relative;
    margin-top: -15px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: start;

    box-sizing: border-box;
    padding: 0 40px;
`;
export const SummaryTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;

    width: fit-content;
    height: fit-content;

    box-sizing: border-box;
    padding: 70px 29px 52px 29px;
    border-bottom: 3px solid #efefef;
`;
export const Highlight = styled.span`
    font-weight: 700;
    font-size: inherit;
    color: inherit;
`;
export const SummaryTitle = styled.span`
    font-size: 23px;
    font-weight: 400;
`;
export const SummaryText = styled.span`
    font-size: 20px;
    font-weight: 400;
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: inherit;
    height: fit-content;

    box-sizing: border-box;
    padding: 40px 10px 60px 10px;
`;

export const ButtonWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 107px;
    margin-bottom: 209px;
`;

export const AIChatBotWrapper = styled.div`
    position: relative;

    width: fit-content;
    height: fit-content;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    align-items: end;

    position: fixed;
    bottom: 20px;
    right: 50px;

    z-index: 100;
    gap: 40px;
`;

export const AIProfile = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-image: url(${RabbitLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f1f1f1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }
`;

export const AIChatBubbleWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 350px;
    height: fit-content;
    padding: 16px 20px;
    background: #ffffff;
    border-radius: 60px;
    margin-bottom: 30px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    line-height: 1.5;
    white-space: pre-wrap;
    word-wrap: break-word;

    text-align: center;
    font-size: 12px;
    color: #000000;

    textarea {
        height: fit-content;
        width: 300px;
        border: none;
        background: none;
        outline: none;
        resize: none;
        overflow: hidden;
        white-space: normal;
        word-wrap: break-word;
        box-sizing: border-box;
        text-align: center;

        font-size: 14px;
    }
`;
export const AIChatBubbleTail = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 30px;
    right: 115px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 60px 30px 0;
    border-color: transparent transparent #ffffff transparent;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
`;

export const AIChatBubbleTailInner = styled.div`
    position: absolute;
    z-index: 3;
    bottom: 3px;
    right: 153px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 25px 30px 0;
    border-color: transparent #ffffff transparent transparent;
    transform: rotate(-90deg) scaleX(-1);
`;
