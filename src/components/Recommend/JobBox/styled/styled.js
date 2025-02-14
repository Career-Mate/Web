import styled from 'styled-components';

export const BoxContainer = styled.div`
    width: fit-content;
    padding: 0 20px;
    height: 60px;
    border-radius: 20px;
    border: 4px solid #84d0b1;
    box-shadow:
        0px 0px 6.8px 0px #00000040,
        inset 0px 0px 14.5px 0px #00000040;
    background-color: #ffffff;
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    font-size: 24px;

    @media (max-width: 1024px) {
        height: 72px;
    }

    @media (max-width: 390px) {
        height: 40px;
        font-size: 16px;
        border-radius: 10px;
    }
`;
