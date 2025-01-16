import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 337px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleBox = styled.div`
    width: 245px;
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
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 367px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(185, 185, 185, 1);
    border-radius: 20px;
    gap: 20px;
`;

export const Img = styled.div`
    width: 130px;
    height: 130px;
    margin-top: 50px;
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
`;

export const FirstSection = styled.div`
    width: 269px;
    position: absolute;
    top: 0;
    left: 0;
    word-wrap: keep-all;
`;
export const SecondSection = styled.div`
    width: 232px;
    position: absolute;
    top: 65px;
    word-wrap: keep-all;
    font-weight: 500;
`;
