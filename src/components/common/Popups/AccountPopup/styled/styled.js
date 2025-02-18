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
    z-index: 101;
`;

export const PopupContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    padding-top: 5px;
    position: fixed;
    width: 378px;
    min-width: 209px;
    height: 221px;
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
    gap: 26px;
    width: 290px;
    height: 145px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 18px;
    width: 290px;
    height: 71px;
`;

export const StyledText = styled.div`
    width: 290px;
    height: 29px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
`;

export const Account = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    width: 290px;
    height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`;

export const ButtonWrapper = styled.div`
    width: 222px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
