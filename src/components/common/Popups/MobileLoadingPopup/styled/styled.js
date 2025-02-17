import styled, { keyframes } from 'styled-components';

export const PopupOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 257px;
    min-width: 175px;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
`;

export const PopupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px 20px;
    gap: 10px;
    width: 221px;
    height: fit-content;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 18px;
    width: 221px;
    height: fit-content;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const StyledText = styled.div`
    width: 221px;
    height: fit-content;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    white-space: pre-line;
`;

export const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 221px;
    height: fit-content;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;

export const LoadingText = styled.div`
    width: auto;
    height: 29px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    display: flex;
    align-items: center;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const LoadingImg = styled.img`
    width: 24px;
    height: 24px;
    animation: ${rotate} 1s linear infinite;
`;

export const CloseButton = styled.div`
    width: 15px;
    height: 15px;
    cursor: pointer;
    justify-content: flex-end;

    img {
        width: 100%;
        height: 100%;
    }
`;
