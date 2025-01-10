import styled from 'styled-components';

export const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 349px;
    height: 268px;
    background: #ffffff;
    border: 1px solid #b9b9b9;
    border-radius: 0 20px 20px 0;
    padding: 16px 17px;
    gap: 10px;
    box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
`;

export const Button = styled.button`
    width: 264px;
    height: 48px;
    border: none;
    border-radius: 10px;
    background-color: ${({ $isActive }) => ($isActive ? '#CFEEE0' : 'white')};
    color: ${({ $isActive }) => ($isActive ? '#2A9D8F' : 'black')};
    font-size: 16px;
    font-weight: ${({ $isActive }) => ($isActive ? '700' : 'normal')};
    cursor: pointer;
`;
