import styled from 'styled-components';

export const CareerMainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: calc(100vh - 300px);
    padding: 32px 16px;
    background-color: white;
`;

export const SearchIcon = styled.div`
    margin: 20px auto;
    img {
        width: 150px;
        height: 150px;
        left: calc(50% - 91px / 2 + 1px);
        top: 250px;
    }
`;
