import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 490px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    @media (max-width: 1024px) {
        width: 633px;
    }
    @media (max-width: 431px) {
        width: fit-content;
        height: fit-content;
    }
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    @media (max-width: 431px) {
        font-size: 14px;
    }
`;

export const StyledInputWrapper = styled.div`
    width: inherit;
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

    justify-content: space-between;

    @media (max-width: 431px) {
        width: 340px;
        padding: 10px 15px;
        height: 50px;
    }
`;
