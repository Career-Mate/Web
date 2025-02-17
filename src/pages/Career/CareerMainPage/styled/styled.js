import styled from 'styled-components';

export const CareerMainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
<<<<<<< HEAD
    min-height: 100vh;
=======
    min-height: calc(100vh - 100px);
>>>>>>> bc72fa7e59dfc26c54d0571cea0b10e993335c27
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

    @media (max-width: 391px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
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

    @media (max-width: 391px) {
        img {
            width: 90px;
            height: 90px;
        }
    }
`;
