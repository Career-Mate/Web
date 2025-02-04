import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-bottom: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2px;
    width: 1200px;
    position: relative;
    white-space: nowrap;
    border-bottom: 2px solid #ddd;
`;

export const TitleWrapper = styled.div`
    width: 220px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 16px;
    border-radius: 20px 20px 0 0;
    cursor: pointer;
    pointer-events: auto;

    background-color: ${({ isSelected }) => (isSelected ? 'white' : 'transparent')};
    color: ${({ isSelected }) => (isSelected ? '#000' : '#aaa')};
    border-top: ${({ isSelected }) => (isSelected ? '2px solid #ccc' : 'none')};
    border-left: ${({ isSelected }) => (isSelected ? '2px solid #ccc' : 'none')};
    border-right: ${({ isSelected }) => (isSelected ? '2px solid #ccc' : 'none')};

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ isSelected }) => (isSelected ? 'white' : 'transparent')};
    }
`;

export const PinIcon = styled.img`
    width: 32px;
    height: 32px;
    visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
`;

export const Title = styled.span`
    width: fit-content;
    font-size: 24px;
    font-weight: 600;
    color: ${({ isSelected }) => (isSelected ? '#000000' : '#aaa')};
    text-align: center;
    display: inline-block;
`;

export const Highlight = styled.span`
    font-size: 24px;
    font-weight: 600;
    background-color: #aaffda;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    margin-top: 10px;
    padding-top: 70px;
    row-gap: 30px;
    column-gap: 20px;
`;

export const EmptyMessage = styled.p`
    width: 912px;
    height: 405px;
    color: #c4c8ce;
    font-weight: 500;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: flex-end;
`;
