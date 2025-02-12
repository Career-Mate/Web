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
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
        font-size: 14px;
        border-radius: 10px;
        padding: 5px 3px;
    }
`;

export const Text = styled.div`
    width: 758px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 20px;
    background-color: white;
    text-align: center;
    word-break: break-word;
    white-space: normal;
    box-shadow: inset 0px 0px 8.3px 1px rgba(0, 0, 0, 0.25);

    padding: 0 10px;
    box-sizing: border-box;

    span {
        display: inline;
        word-break: break-word;
    }
    strong {
        font-weight: 700;
        display: inline;
        word-break: break-word;
    }

    @media (max-width: 1024px) {
        width: 542px;
        height: 40px;
        font-size: 14px;
        border-radius: 10px;
    }

    @media (max-width: 430px) {
        width: 307px;
        height: 38px;
        font-size: 10px;
        border-radius: 10px;
    }
`;
