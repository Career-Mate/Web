import styled from 'styled-components';

export const FooterContainer = styled.footer`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 249px;
    background: #f7f8f9;
    border-top: 1px solid #d8d8d8;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 19px;
    width: 1165px;
    height: 177px;
`;

export const Text = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #656565;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #9d9d9d;
`;

export const Divider = styled.span`
    color: #9d9d9d;
    font-size: 16px;
    line-height: 19px;
`;

export const Copyright = styled.div`
    color: #9d9d9d;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-top: 20px;
`;
