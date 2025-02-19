import styled from 'styled-components';

export const ComponentContainer = styled.div`
    position: relative;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    padding: 0 40px;
    width: 750px;
    margin-top: 40px;

    z-index: 0;

    @media (max-width: 431px) {
        width: 340px;
    }
`;

export const ImgWrapper = styled.div`
    width: inherit;
    height: 400px;
    border-radius: 20px;
    background-color: darkgray;
    position: relative;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 431px) {
        height: 250px;
    }
`;

export const ImgTextWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    width: fit-content;
    height: fit-content;
    color: white;
    z-index: 2;

    @media (max-width: 431px) {
        gap: 7px;
        bottom: 25px;
        left: 20px;
    }

    animation: pulse 1.5s infinite ease-in-out;
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const ImgTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;

    @media (max-width: 431px) {
        gap: 4px;
    }
`;
export const ImgTitle = styled.span`
    width: 250px;
    height: 40px;
    background-color: grey;
    border-radius: 20px;

    @media (max-width: 431px) {
        width: 130px;
        height: 25px;
    }
`;
export const ImgButton = styled.div`
    width: 110px;
    height: 15px;
    background-color: grey;
    border-radius: 20px;

    @media (max-width: 431px) {
        width: 70px;
        height: 10px;
    }
`;
export const ImgText = styled.span`
    width: 180px;
    height: 20px;
    border-radius: 20px;
    background-color: grey;

    @media (max-width: 431px) {
        width: 90px;
        height: 13px;
    }
`;

export const SummaryWrapper = styled.div`
    width: inherit;
    height: fit-content;
    box-shadow:
        0px 0px 10px 0px #00000040,
        0px 0px 7px 0px #00000040 inset;
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid #c4c4c4;

    position: relative;
    margin-top: -15px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: start;

    box-sizing: border-box;
    padding: 0 40px;

    @media (max-width: 431px) {
        padding: 30px;
        box-shadow: 0px 0px 10px 0px #00000040;
    }
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: inherit;
    height: fit-content;

    box-sizing: border-box;
    padding: 40px 20px 60px 20px;

    @media (max-width: 431px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px 20px;
        width: 100%;
        padding: 0px;
    }
`;

export const ButtonWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 107px;
    margin-bottom: 209px;

    @media (max-width: 431px) {
        flex-direction: column;
        margin-top: 30px;
        margin-bottom: 70px;
        gap: 10px;
    }
`;
