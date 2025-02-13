import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;

    @media (max-width: 391px) {
        gap: 7px;
        max-width: 130px;
    }

    animation: pulse 1.5s infinite ease-in-out;
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const SectionTitle = styled.span`
    width: 100px;
    height: 35px;
    background-color: darkgray;
    border-radius: 20px;

    @media (max-width: 391px) {
        width: 70px;
        height: 17px;
    }
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 391px) {
        gap: 5px;
    }
`;
export const Item = styled.span`
    width: 300px;
    height: 22px;
    background-color: darkgray;
    border-radius: 20px;

    @media (max-width: 391px) {
        width: 110px;
        height: 11px;
    }
`;
export const Item2 = styled.span`
    width: 250px;
    height: 22px;
    background-color: darkgray;
    border-radius: 20px;

    @media (max-width: 391px) {
        width: 85px;
        height: 11px;
    }
`;
