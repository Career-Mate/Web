import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 490px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    @media (max-width: 1024px) {
        width: 476px;
    }

    @media (max-width: 431px) {
        width: 351px;
    }
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #000000;

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 431px) {
        font-size: 12px;
    }
`;

export const StyledInputWrapper = styled.div`
    width: 490px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px 20px;
    gap: 8px;

    @media (max-width: 1024px) {
        width: 476px;
        height: 60px;
    }

    @media (max-width: 431px) {
        width: 351px;
        height: 45px;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    &::placeholder {
        color: #c4c4c4;
    }

    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 431px) {
        font-size: 12px;
    }
`;

export const ErrorMessage = styled.span`
    font-weight: 400;
    font-size: 10px;
    line-height: 11.93px;
    color: #ff5353;
    width: 100%;

    @media (max-width: 1024px) {
        font-size: 14px;
    }

    @media (max-width: 431px) {
        font-size: 12px;
    }
`;
