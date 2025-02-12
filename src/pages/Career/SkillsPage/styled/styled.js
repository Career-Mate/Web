import styled from 'styled-components';

export const SkillsPageTemplateWrapper = styled.div`
    & div[data-component='TableCellHeader'] {
        width: 17%;
        align-items: center;
        justify-content: center;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 976px;
`;

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color: #000;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 24px;
    }
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    color: #c4c8ce;
    text-align: center;
    margin-left: 20px;

    @media (max-width: 1024px) {
        font-size: 10px;
        margin-left: 10px;
        line-height: 20px;
    }
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    min-height: 100vh;
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

    & > div {
        display: flex;
        gap: 15px;
    }
`;
