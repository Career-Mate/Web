import styled from 'styled-components';

export const MainContainer = styled.div`
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

    @media (max-width: 431px) {
        height: 250px;
    }
`;

export const Object = styled.object`
    width: 225px;
    @media (max-width: 1024px) {
        width: 200px;
    }
    @media (max-width: 431px) {
        width: 100px;
    }
`;

export const FirstTextWrapper = styled.div`
    font-size: 28px;
    text-align: right;
    display: flex;
    flex-direction: column;

    b {
        font-size: 40px;
        font-weight: 400;
        span {
            font-weight: 700;
            color: rgba(42, 157, 143, 1);
        }

        @media (max-width: 1024px) {
            font-size: 30px;
        }
        @media (max-width: 431px) {
            font-size: 16px;
        }
    }

    @media (max-width: 1024px) {
        font-size: 14px;
    }
    @media (max-width: 431px) {
        font-size: 10px;
    }
`;

export const SecondPage = styled.div`
    width: 100%;
    height: 150vh;
    background-image: url('/assets/main-vector.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        height: 90vh;
    }
    @media (max-width: 431px) {
        height: 358px;
    }
`;

export const SecondContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 300px;
    box-sizing: border-box;
    gap: 80px;
    h1 {
        color: rgba(255, 255, 255, 1);
        font-size: 60px;
        font-weight: 700;
    }

    @media (max-width: 1024px) {
        gap: 24px;
        h1 {
            color: rgba(255, 255, 255, 1);
            font-size: 50px;
            font-weight: 700;
        }
    }
    @media (max-width: 431px) {
        padding-top: 60px;
        gap: 15px;
        h1 {
            color: rgba(255, 255, 255, 1);
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 0;
        }
    }
`;

export const SecondCheckWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 57px;

    @media (max-width: 1024px) {
        gap: 37px;
    }
    @media (max-width: 431px) {
        gap: 19px;
    }
`;

export const ThirdPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;
    width: 100%;
    height: auto;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        gap: 100px;
    }
    @media (max-width: 431px) {
        gap: 20px;
    }
`;

export const ThirdText = styled.div`
    font-size: 20px;
    margin-top: 100px;

    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 431px) {
        font-size: 10px;
    }
`;

export const InterViewBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 25px;
    }
    @media (max-width: 431px) {
        gap: 8px;
    }
`;

export const FourthPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 100px;
    margin-top: 150px;
    box-sizing: border-box;
`;

export const FourthTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 27px;
    font-size: 20px;
    padding-top: 100px;
    p {
        margin: 0;
        padding: 0;
        span {
            color: rgba(42, 157, 143, 1);
            font-weight: 700;
        }
    }

    @media (max-width: 1024px) {
        gap: 15px;
        padding-top: 75px;
        font-size: 14px;
    }

    @media (max-width: 431px) {
        gap: 12px;
        padding-top: 50px;
        font-size: 10px;
    }
`;

export const Text = styled.div`
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 1024px) {
        font-size: 20px;
    }

    @media (max-width: 431px) {
        font-size: 16px;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    gap: 20px;
    font-size: 18px;

    @media (max-width: 431px) {
        flex-direction: column;
    }
`;

export const FifthPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: 431px) {
        height: 600px;
    }
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

    @media (max-width: 431px) {
        font-size: 13px;
        span {
            font-size: 20px;
            display: inline;
        }
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
    height: 100vh;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        font-size: 24px;
    }
    @media (max-width: 431px) {
        font-size: 14px;
        height: 400px;
    }
`;

export const OtherTitle = styled.div`
    margin-top: 200px;
    margin-bottom: 10px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 431px) {
        margin-top: 100px;
    }
`;

export const OtherBox = styled.div`
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
    border-radius: 20px;
    padding: 15px 13px;

    @media (max-width: 431px) {
        font-size: 12px;
    }
`;
