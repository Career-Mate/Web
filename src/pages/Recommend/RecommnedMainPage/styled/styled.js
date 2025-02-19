import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    padding-top: 100px;
    padding-bottom: 200px;

    @media (max-width: 431px) {
        padding-top: 50px;
        padding-bottom: 100px;
    }
`;

export const SearchIcon = styled.div`
    margin: 20px auto;
    img {
        width: 124px;
        height: 124px;
        left: 50%;
        top: 250px;
        transform: -50%;
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
