import styled from 'styled-components';
import SpeechBubble from '../../../../../public/assets/speech-bubble.svg';
import MobileSpeechBubble from '../../../../../public/assets/mobile-speech-bubble.svg';

export const MainContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-right: 60px;
    gap: 60px;
    @media (max-width: 391px) {
        margin: 70px 15px 95px 15px;
        gap: 10px;
        align-items: center;
    }
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (max-width: 391px) {
        width: 340px;
    }
`;
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 24px;
    @media (max-width: 391px) {
        font-size: 16px;
        gap: 5px;
    }
`;
export const Icon = styled.img`
    width: ${({ $size }) => $size || '32px'};
    height: ${({ $size }) => $size || '32px'};

    @media (max-width: 391px) {
        width: 16px;
        height: 16px;
    }
`;
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.div`
    font-weight: 400;
    font-size: 16px;
    white-space: pre-line;
    line-height: 2;

    @media (max-width: 391px) {
        font-size: 14px;
        width: 300px;
    }
`;
export const Subtitle = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    color: #c4c8ce;
    text-align: center;
    margin-left: 20px;
    @media (max-width: 391px) {
        font-size: 10px;
        margin-left: 0px;
    }
`;
export const TooltipWrapper = styled.span`
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
    @media (max-width: 391px) {
        align-items: end;
        width: 150px;
        height: 150px;
        top: -130px;
        left: 50%;
    }
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
        @media (max-width: 391px) {
            background-image: url(${MobileSpeechBubble});
        }
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center 75%;
        z-index: -1;
    }

    visibility: hidden;
    opacity: 0;
    transition:
        opacity 0.2s ease,
        visibility 0s 0.2s;

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

    @media (max-width: 391px) {
        margin-bottom: 50px;
        font-size: 8px;
    }
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
`;
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;
    justify-content: end;

    @media (max-width: 391px) {
        flex-direction: column;
        gap: 12px;
    }
`;
