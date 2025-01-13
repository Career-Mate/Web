import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

export const FirstPage = styled.div`
    width: 100%;
    height: calc(100vh - 130px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    box-sizing: border-box;
`;

export const FirstTextWrapper = styled.div`
    font-size: 30px;
    text-align: right;
    display: flex;
    flex-direction: column;

    b {
        font-size: 48px;
        font-weight: 400;
        span {
            font-weight: 700;
            color: rgba(42, 157, 143, 1);
        }
    }
`;

export const SecondPage = styled.div`
    width: 100%;
    height: 180vh;
    background-image: url('/src/assets/MainPage/main-vector.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const SecondContainer = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    h1 {
        color: rgba(255, 255, 255, 1);
        font-size: 80px;
        font-weight: 700;
    }
`;

export const SecondCheckWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 57px;
`;

export const ThirdPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`;

export const ThirdText = styled.div`
    margin-bottom: 100px;
    font-size: 20px;
`;

export const InterViewBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const FourthPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap: 100px;
    box-sizing: border-box;
`;

export const FourthTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 27px;
    font-size: 20px;

    p {
        span {
            color: rgba(42, 157, 143, 1);
            font-weight: 700;
        }
    }
`;

export const Text = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

export const CardWrapper = styled.div`
    display: flex;
    gap: 62px;
    font-size: 18px;
`;

export const FifthPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const FifthText = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 44px;
    span {
        font-size: 30px;
        font-weight: 700;
        color: rgba(42, 157, 143, 1);
    }
`;

export const DashedLine = styled.svg`
    width: 100%;
    height: 10px;

    line {
        stroke: #e9ebed;
        stroke-width: 5;
        stroke-dasharray: 15, 15;
        stroke-linecap: round;
    }
`;

export const OtherPage = styled.div`
    font-size: 30px;
    width: 100%;
    height: 130vh;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OtherTitle = styled.div`
    margin-top: 200px;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
`;

export const OtherBox = styled.div`
    margin-top: 50px;
    text-align: center;
    border: 1px solid rgba(185, 185, 185, 1);
    box-shadow: 0px 0px 8.5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 27px 13px;
`;
