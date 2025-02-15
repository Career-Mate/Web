import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-bottom: 20px;
    margin-left: 0px;
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
    padding: 24px 24px;
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

    @media (max-width: 391px) {
        width: 160px;
        padding: 12px 0;
        gap: 0;
    }
`;

export const PinIcon = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: 32px;
    height: 32px;
    visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};

    @media (max-width: 391px) {
        width: 16px;
        height: 16px;
    }
`;

export const Title = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    width: fit-content;
    font-size: 24px;
    font-weight: 600;
    color: ${({ isSelected }) => (isSelected ? '#000000' : '#aaa')};
    text-align: center;
    display: inline-block;

    @media (max-width: 391px) {
        font-size: 16px;
    }
`;

export const Highlight = styled.span`
    font-size: 24px;
    font-weight: 600;
    background-color: #aaffda;

    @media (max-width: 391px) {
        font-size: 16px;
    }
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 100%;
    max-width: 1282px;
    margin: 0 auto;
    padding-bottom: 30px;
    justify-items: center;
    justify-items: stretch;
    padding: 50px 0;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    @media (max-width: 390px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const EmptyMessage = styled.p`
    width: 1280px;
    min-height: 460px;
    color: #c4c8ce;
    font-weight: 500;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px;
`;

export const ButtonContainer = styled.div`
    padding-top: 100px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    position: relative;

    & > *:only-child {
        margin-left: auto;
    }

    & > :nth-child(1):nth-last-child(2) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    & > :nth-child(2):nth-last-child(1) {
        margin-left: auto;
    }

    @media (max-width: 391px) {
        flex-direction: column;
        position: static;

        & > :nth-child(1):nth-last-child(2) {
            position: static;
            transform: none;
            margin-bottom: 40px;
        }

        padding-top: 40px;
    }
`;
