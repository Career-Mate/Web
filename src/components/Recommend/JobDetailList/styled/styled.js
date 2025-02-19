import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: fit-content;

    @media (max-width: 431px) {
        gap: 7px;
        max-width: 130px;
    }
`;

export const SectionTitle = styled.span`
    font-size: 25px;
    font-weight: 700;

    @media (max-width: 431px) {
        font-size: 12px;
    }
`;

export const ItemListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    width: fit-content;
    height: fit-content;

    @media (max-width: 431px) {
        gap: 10px;
    }
`;

export const Item = styled.span`
    font-weight: 400;
    font-size: 23px;

    @media (max-width: 431px) {
        font-size: 11px;
    }
`;
export const Check = styled.img`
    height: 21px;
    width: 21px;

    @media (max-width: 431px) {
        height: 11px;
        width: 11px;
    }
`;
