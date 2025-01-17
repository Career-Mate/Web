import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
    display: flex;
    gap: 18px;
    justify-content: space-between;
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 9px;
    background: #ffffff;
    box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

export const Text = styled.div`
    width: 930px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 20px;
    padding: 18px 26px;
    background-color: white;
    box-shadow: inset 0px 0px 8.3px 1px rgba(0, 0, 0, 0.25);
    strong {
        font-weight: 700;
    }
`;
