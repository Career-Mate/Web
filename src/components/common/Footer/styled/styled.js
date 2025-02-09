import styled from 'styled-components';

export const FooterContainer = styled.footer`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 220px;
    background: #f7f8f9;
    border-top: 1px solid #d8d8d8;
    align-items: center;
    justify-content: center;

    @media (max-width: 391px) {
        height: 170px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    max-width: 1165px;
    height: 120px;

    @media (max-width: 1024px) {
        max-width: 800px;
    }
    @media (max-width: 391px) {
        max-width: 300px;
        text-align: center;
        align-items: center;
    }
`;

export const Text = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #656565;
    @media (max-width: 391px) {
        font-size: 12px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: 391px) {
        display: none;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #9d9d9d;
`;

export const Divider = styled.span`
    color: #9d9d9d;
    font-size: 12px;
    line-height: 19px;
`;

export const Copyright = styled.div`
    color: #9d9d9d;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 19px;
    text-align: center;
    margin-top: 20px;
    @media (max-width: 391px) {
        font-size: 10px;
    }
`;

export const Link = styled.a`
    color: #9d9d9d;
    text-decoration: underline;
`;

export const ShowOnSmall = styled.div`
    display: none;
    @media (max-width: 391px) {
        display: block;
    }
`;

export const HiddenOnSmall = styled.div`
    display: block;
    @media (max-width: 391px) {
        display: none;
    }
`;
