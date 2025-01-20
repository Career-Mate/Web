import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 976px;
    margin-top: 50px;
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color: #000;
    margin: 0;
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    min-height: 100vh;
    padding: 20px 0;
`;

export const ProgressBarWrapper = styled.div`
    width: 100%;
    max-width: 976px;
`;

export const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 976px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    max-width: 976px;
    padding: 50px 0;
`;
