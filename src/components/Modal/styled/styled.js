import styled from 'styled-components';

export const ModalOverlay = styled.div`
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

export const ModalWrapper = styled.div`


    width: 336.5px;
    height: 143.5px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: 1px;
    padding: 78px 40.5px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.6);

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const ModalContent = styled.div`
    width: 286.5px;
    height: 105.5px;
    gap: 9px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`;

export const TextGroup = styled.div`
    width: 286.5px;
    height: 52.5px;
    gap: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Text = styled.div`
    width: 260px;
    height: 33px;
    
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 14px;
    line-height: 16.7px;
    color: #000000;
`;

export const Loading = styled.div`
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 12px;
    line-height: 14.32px;
    color: #000000;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Loader = styled.img`
    width: 12px;
    height: 12px;
`;

export const CancelButton = styled.button`
    width: 46.5px;
    height: 21px;
    border-radius: 5px;
    padding: 10px 44px;
    gap: 5px;
    background: #66CCAA;

    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 10px;
    line-height: 11.94px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    white-space: nowrap; 
`;
