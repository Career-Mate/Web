import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
export const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const CategoryCarousel = styled.div`
    width: 100%;
    max-width: ${(props) => (props.$carouselWidth !== undefined ? `${props.$carouselWidth}px` : '360px')};
    height: 60px;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    gap: ${(props) => (props.$itemGap !== undefined ? `${props.$itemGap}px` : '20px')};
    transition: transform 0.3s ease-in-out;
    transform: translateX(${(props) => props.$translateX}px);
`;

export const CategoryItem = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: ${(props) => (props.$width !== undefined ? `${props.$width}px` : '100px')};
    min-height: 40px;

    font-size: ${(props) => (props.$selected ? '18px' : '15px')};
    font-weight: 700;
    color: ${(props) => (props.$selected ? '#000000' : '#c4c8ce')};

    white-space: normal;
    word-break: keep-all;

    transition:
        font-size 0.3s ease-in-out,
        color 0.3s ease-in-out;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    justify-content: space-between;
    align-items: center;
`;

export const ArrowButton = styled.img`
    width: 5px;
    height: 9px;
    cursor: pointer;
    opacity: ${(props) => (props.$hidden ? 0 : 1)};
    visibility: ${(props) => (props.$hidden ? 'hidden' : 'visible')};
    transition: opacity 0.3s ease-in-out;
`;
