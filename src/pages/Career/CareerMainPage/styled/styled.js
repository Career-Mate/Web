import styled from 'styled-components';

export const CareerMainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: calc(100vh - 100px);
    padding: 32px 16px;
    background-color: white;

    @media (max-width: 1024px) {
        min-height: calc(100vh - 500px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 391px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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

    @media (max-width: 391px) {
        img {
            width: 90px;
            height: 90px;
        }
    }
`;
