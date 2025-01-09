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
`;

export const PopupContainer = styled.div`
    width: 673px;
    height: 287px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.6);
    padding: 156px 81px;
    gap: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const PopupWrapper = styled.div`
    width: 573px;
    height: 211px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    align-content: flex-end;
    padding: 0px;
    gap: 18px;
`;

export const TextWrapper = styled.div`
    width: 573px;
    height: 105px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
`;

export const StyledText = styled.div`
    width: 520px;
    height: 66px;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: #000000;
`;

export const Loading = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Loader = styled.img`
    width: 24px;
    height: 24px;
    animation: ${rotate} 1s linear infinite;
`;

export const CancelButton = styled.button`
    width: 93px;
    height: 42px;
    border-radius: 10px;
    gap: 10px;
    background: #66ccaa;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    white-space: nowrap;
`;
