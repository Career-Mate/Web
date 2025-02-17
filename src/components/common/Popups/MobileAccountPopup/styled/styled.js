import styled from 'styled-components';

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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    position: fixed;
    width: 252px;
    height: 148px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
`;

export const PopupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;
    gap: 10px;
    width: 216px;
    height: 112px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 216px;
    height: 45px;
`;

export const StyledText = styled.div`
    width: 216px;
    height: 21px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

export const Account = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    width: 216px;
    height: 21px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

export const ButtonWrapper = styled.div`
    width: 216px;
    height: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 22px;
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
