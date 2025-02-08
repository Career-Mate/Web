import styled from 'styled-components';

export const PageContainer = styled.div`
    margin-top: 85px;
    margin-bottom: 110px;
    display: flex;
    flex-direction: row;
    gap: 60px;
    width: 100%;
    height: fit-content;
`;
export const SideContainer = styled.div`
    position: relative;
    left: -5px;
    height: inherit;
    margin-right: 100px;

    @media (max-width: 1024px) {
        left: -2px;
        margin-right: 0px;
    }
`;
export const MainContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;
