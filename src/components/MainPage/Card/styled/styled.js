import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 334px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(185, 185, 185, 1);
    border-radius: 20px;
    gap: 20px;
`;

export const Img = styled.div`
    width: 100px;
    height: 100px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
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
    top: 60px;
    word-wrap: keep-all;
    font-weight: 500;
`;
