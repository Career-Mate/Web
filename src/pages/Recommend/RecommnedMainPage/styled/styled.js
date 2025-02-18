import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 50px;
    position: relative;
`;

export const SearchIcon = styled.div`
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
