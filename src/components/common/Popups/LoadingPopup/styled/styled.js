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
    gap: 26px;
    position: absolute;
    width: 706px;
    min-width: 400px;
    height: 287px;
    padding-top: 10px;
    left: calc(50% - 706px / 2);
    top: calc(50% - 287px / 2 - 33px);
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
`;

export const PopupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 32px 44px;
    gap: 26px;
    width: 618px;
    height: 193px;
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
    width: 618px;
    height: 119px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const StyledText = styled.div`
    width: 618px;
    height: 72px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 618px;
    height: 29px;
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
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
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
