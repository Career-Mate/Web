import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        width: 170px;
    }
`;

export const TitleBox = styled.div`
    width: 218px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 0;
    box-sizing: border-box;
    background-color: rgba(110, 198, 168, 1);
    font-size: 22px;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    transform: translateY(30px);

    @media (max-width: 1024px) {
        width: 123px;
        height: 31px;
        font-size: 11px;
        transform: translateY(20px);
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(185, 185, 185, 1);
    border-radius: 20px;
    gap: 20px;

    @media (max-width: 1024px) {
        height: 220px;
        border-radius: 10px;
        gap: 10px;
    }
`;

export const Img = styled.div`
    width: 100px;
    height: 100px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        width: 60px;
        height: 60px;
        margin-top: 25px;
    }
`;

export const Content = styled.div`
    width: 269px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: 18px;
    position: relative;
    white-space: pre-line;

    @media (max-width: 1024px) {
        font-size: 10px;
    }
`;

export const FirstSection = styled.div`
    width: 269px;
    position: absolute;
    top: 0;
    word-wrap: keep-all;

    @media (max-width: 1024px) {
        width: 170px;
    }
`;
export const SecondSection = styled.div`
    width: 232px;
    position: absolute;
    top: 60px;
    word-wrap: keep-all;
    font-weight: 500;

    @media (max-width: 1024px) {
        width: 150px;
        top: 45px;
    }
`;
