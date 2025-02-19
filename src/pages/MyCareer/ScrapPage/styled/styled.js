import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2px;
    width: 100%;
    position: relative;
    white-space: nowrap;
    border-bottom: 2px solid #ccc;
`;

export const TitleWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: 220px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 10px;
    border-radius: 20px 20px 0 0;
    cursor: pointer;
    pointer-events: auto;
    margin-top: 30px;

    background-color: ${({ isSelected }) => (isSelected ? 'white' : 'transparent')};
    color: ${({ isSelected }) => (isSelected ? '#000' : '#aaa')};
    border-top: ${({ isSelected }) => (isSelected ? '2px solid #ccc' : 'none')};
    border-left: ${({ isSelected }) => (isSelected ? '2px solid #ccc' : 'none')};
    border-right: ${({ isSelected }) => (isSelected ? '2px solid #ccc' : 'none')};
    border-bottom: none;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: ${({ isSelected }) => (isSelected ? 'white' : 'transparent')};
    }

    @media (max-width: 431px) {
        width: 160px;
        padding: 12px 0;
        gap: 0;
    }
`;

export const PinIcon = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: 24px;
    height: 24px;
    visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};

    @media (max-width: 431px) {
        width: 16px;
        height: 16px;
    }
`;

export const Title = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: fit-content;
    font-size: 20px;
    font-weight: 600;
    color: ${({ isSelected }) => (isSelected ? '#000000' : '#aaa')};
    text-align: center;
    display: inline-block;

    @media (max-width: 431px) {
        font-size: 16px;
    }
`;

export const Highlight = styled.span`
    font-size: 20px;
    font-weight: 600;
    background-color: #aaffda;

    @media (max-width: 431px) {
        font-size: 16px;
    }
`;

export const ScrapContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: fit-content;
    margin: 0 auto;
    justify-items: center;
    padding-top: 50px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    @media (max-width: 431px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const MessageWrapper = styled.div`
    min-width: 1010px;
    @media (max-width: 1024px) {
        min-width: 660px;
    }
    @media (max-width: 431px) {
        min-width: fit-content;
    }
`;

export const EmptyMessage = styled.p`
    width: 100%;
    min-height: 350px;
    color: #c4c8ce;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px;

    @media (max-width: 431px) {
        font-size: 16px;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    justify-content: end;
    position: relative;
`;

export const PaginationWrapper = styled.div`
    @media (max-width: 1024px) {
        width: 100%;
    }
    display: flex;
    justify-content: center;
`;

export const ButtonWrapper = styled.div`
    width: 650px;
    display: flex;
    justify-content: space-between;
    position: relative;
    & > :nth-child(2) {
        margin-left: auto;
    }
    @media (max-width: 1024px) {
        width: inherit;
        flex-direction: column;
        gap: 130px;
        justify-content: center;
    }
    @media (max-width: 431px) {
        gap: 50px;
    }
`;
