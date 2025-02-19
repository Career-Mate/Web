import styled from 'styled-components';

export const TabContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`;

export const TabWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    position: relative;
    white-space: nowrap;
    border-bottom: 2px solid #ccc;
`;

export const TabButton = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isActive',
})`
    width: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 0;
    border-radius: 20px 20px 0 0;
    cursor: pointer;
    pointer-events: auto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;

    background-color: ${({ isActive }) => (isActive ? '#f7f8f9' : 'transparent')};
    color: ${({ isActive }) => (isActive ? '#000' : ' #C4C8CE')};
    border-top: ${({ isActive }) => (isActive ? '2px solid #ccc' : 'none')};
    border-left: ${({ isActive }) => (isActive ? '2px solid #ccc' : 'none')};
    border-right: ${({ isActive }) => (isActive ? '2px solid #ccc' : 'none')};

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: ${({ isActive }) => (isActive ? '#f7f8f9' : 'transparent')};
    }

    @media (max-width: 431px) {
        width: 160px;
        padding: 12px 0;
        gap: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    }
`;

export const ListContainer = styled.div`
    background-color: #f7f8f9;
    width: 100%;
    padding-bottom: 100px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 80px;
`;

export const TextWrapper = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 50px;
`;

export const Text = styled.span`
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 431px) {
        font-size: 10px;
        line-height: 11px;
    }
`;

export const Highlight = styled.span`
    font-weight: 700;
    font-size: inherit;
    color: inherit;
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: fit-content;
    max-width: 1282px;
    margin: 0 auto;
    padding-bottom: 30px;
    justify-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    @media (max-width: 431px) {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 0px;
        gap: 25px;
    }
`;

export const ButtonContainer = styled.div`
    padding-top: 100px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    position: relative;
    justify-content: center;

    & > *:only-child {
        margin: auto;
    }

    & > :nth-child(1):nth-last-child(2) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    & > :nth-child(2):nth-last-child(1) {
        margin-left: auto;
    }

    @media (max-width: 431px) {
        flex-direction: column;
        position: static;

        & > :nth-child(1):nth-last-child(2) {
            position: static;
            transform: none;
            margin-bottom: 40px;
        }

        & > :nth-child(2):nth-last-child(1) {
            margin-left: 0;
        }

        padding-top: 80px;
    }
`;

export const DeadlineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    padding-bottom: 40px;
    width: fit-content;
    height: 40px;
    left: 50%;
`;
