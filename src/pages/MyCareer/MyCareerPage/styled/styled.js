import styled from 'styled-components';

export const PageContainer = styled.div`
    margin-top: 85px;
    margin-bottom: 110px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;

    @media (max-width: 431px) {
        margin-top: 0px;
        margin-bottom: 50px;
    }
`;
export const SideContainer = styled.div`
    position: relative;
    left: -5px;
    height: inherit;

    @media (max-width: 1024px) {
        left: -2px;
        margin-right: 0px;
    }
`;
export const MainContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 431px) {
        width: 100%;
    }
`;
