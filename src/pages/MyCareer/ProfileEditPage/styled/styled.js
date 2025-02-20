import styled from 'styled-components';

export const EditContainer = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-left: 300px;

    @media (max-width: 1024px) {
        margin-left: 70px;
    }

    @media (max-width: 431px) {
        margin-left: 0;
        align-items: center;
        margin-bottom: 80px;
    }
`;

export const NoticeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media (max-width: 431px) {
        margin-top: 50px;
        text-align: center;
    }
`;

export const NoticeTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 431px) {
        font-size: 16px;
    }
`;

export const NoticeDetail = styled.div`
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 431px) {
        font-size: 14px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: fit-content;
`;
