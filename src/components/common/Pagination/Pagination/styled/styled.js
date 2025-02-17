import styled from 'styled-components';

export const PaginationContainer = styled.div`
    width: 296px;
    height: 26px;
    left: calc(50% - 296px / 2);
    gap: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: ${({ $isHidden }) => ($isHidden ? '0' : '1')};
    pointer-events: ${({ $isHidden }) => ($isHidden ? 'none' : 'auto')};
    @media (max-width: 431px) {
        width: 215px;
        height: 20px;
        gap: 15px;
    }
`;

export const ArrowWrapper = styled.div`
    width: 68px;
    height: 21px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 32px;
    @media (max-width: 431px) {
        width: 40px;
        gap: 10px;
    }
`;

export const ArrowButton = styled.button`
    width: 24px;
    height: 21px;
    background: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: 0px;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

    @media (max-width: 431px) {
        width: 5px;
        height: 8px;
    }
`;

export const PageNumberWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 25px;
    @media (max-width: 431px) {
        gap: 10px;
    }
`;

export const PageNumber = styled.button`
    font-family: 'Albert Sans';
    font-weight: ${({ $isActive }) => ($isActive ? 700 : 500)};
    font-size: 22px;
    line-height: 26px;
    color: ${({ $isActive }) => ($isActive ? '#2A9D8F' : '#A4A4A4')};
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 2px 10px;

    @media (max-width: 431px) {
        font-size: 14px;
        padding: 2px 5px;
    }
`;
