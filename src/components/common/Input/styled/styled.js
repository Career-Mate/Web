import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 633px;
    height: 121px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 20px;
`;

export const Label = styled.label`
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
    gap: 8px;
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

export const ErrorMessage = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #ff5353;
    width: 100%;
`;
