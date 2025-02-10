import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 633px;
    height: 121px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 20px;
    @media (max-width: 391px) {
        height: 60px;
    }
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    @media (max-width: 391px) {
        font-size: 14px;
    }
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

    justify-content: space-between;
    .calendar-icon {
        font-size: 26px;
        color: #c4c4c4;
        cursor: pointer;
        @media (max-width: 391px) {
            font-size: 16px;
        }
    }

    @media (max-width: 391px) {
        width: 320px;
        padding: 10px 22px;
        height: 40px;
    }
`;

export const DateInput = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isInline',
})`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        font-size: 16px;
        width: ${(props) => (props.isInline ? 'auto' : '200px')};
        border: none;
        background: ${(props) => (props.isInline ? 'none' : '#ffffff')};
        padding: ${(props) => (props.isInline ? '0' : '4px 8px')};
        outline: none;

        @media (max-width: 391px) {
            font-size: 12px;
            width: 100px;
        }
    }
`;

export const DateDivider = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #d9d9d9;
    padding-right: 20px;
    @media (max-width: 391px) {
        padding-right: 10px;
    }
`;
