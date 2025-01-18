import styled from "styled-components";
import SpeechBubble from "../../../../assets/common/speechBubble.svg";


export const MainContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 60px;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:25px;
`
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 24px;
`
export const Icon = styled.img`
    width: 32px;
    height: 32px;
`
export const Text = styled.div`
    font-weight: 400;
    font-size: 16px;
    white-space: pre-line;
    line-height: 2;
`

export const TooltipWrapper = styled.span`
    margin-left: 5px;
    font-size: 16px;
    color: grey;
    cursor: pointer;
    position: relative;

`;
export const Tooltip = styled.div`
    position: absolute;
    top: -90px;
    left: 50%;
    transform: translateX(-10%);

    width: 200px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    text-align: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${SpeechBubble});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center 75%;
        z-index: -1;
    }
    
    /* 초기 상태에서 숨김 */
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease, visibility 0s 0.2s;

    /* 마우스 올릴 때 보이게 설정 */
    ${TooltipWrapper}:hover & {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.2s ease;
    }

`;
export const TooltipText = styled.p`
    font-size: 11px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.5;

    text-align: center;
`;

export const Hyperlink = styled.a`
    text-decoration: underline;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
`;

export const InputContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
`
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;
    justify-content: end;
`
