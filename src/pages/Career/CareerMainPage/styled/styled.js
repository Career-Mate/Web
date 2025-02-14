import styled from 'styled-components';

export const CareerMainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 32px 16px;
    background-color: white;
    position: relative;

    @media (max-width: 1024px) {
        min-height: 100vh;
        position: relative;
        top: auto;
        left: auto;
        transform: none;
    }
`;

export const SearchIcon = styled.div`
    margin: 20px auto;
    img {
        width: 150px;
        height: 150px;
        left: calc(50% - 91px / 2 + 1px);
        top: 250px;
    }

    @media (max-width: 1024px) {
        width: 140px;
        height: 140px;
    }
`;
