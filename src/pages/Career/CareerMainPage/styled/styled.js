import styled from 'styled-components';

export const CareerMainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
    position: relative;
    padding-top: 100px;
    padding-bottom: 200px;

    @media (max-width: 431px) {
        padding-top: 50px;
        padding-bottom: 100px;
    }
`;

export const fileIcon = styled.div`
    margin: 20px auto;
    img {
        width: 124px;
        height: 124px;
        left: calc(50% - 91px / 2 + 1px);
        top: 250px;
    }

    @media (max-width: 1024px) {
        img {
            width: 140px;
            height: 140px;
        }
    }

    @media (max-width: 431px) {
        img {
            width: 90px;
            height: 90px;
        }
    }
`;
