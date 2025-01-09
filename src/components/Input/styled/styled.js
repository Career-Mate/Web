import styled, { css } from 'styled-components';

const sizeStyles = {
    large: css`
        width: 633px;
        height: 121px;
    `,
    small: css`
        width: 199px;
        height: 112px;
    `,
};

export const InputContainer = styled.div`
    ${({ size }) => sizeStyles[size] || sizeStyles.large}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 18px;
    line-height: ${({ size }) => (size === 'large' ? '21px' : '19px')};
    color: #000000;
`;

export const StyledInputWrapper = styled.div`
    ${({ size }) => (size === 'large' ? 'width: 633px; height: 60px;' : 'width: 199px; height: 60px;')};
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
