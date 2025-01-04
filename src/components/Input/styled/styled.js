import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 633px;
    height: 91px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const Label = styled.label`
    width: 633px;
    height: 21px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

export const StyledInputWrapper = styled.div`
    width: 633px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 29px;
    gap: 10px;
`;

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    &::placeholder {
        color: #c4c4c4;
    }
`;
