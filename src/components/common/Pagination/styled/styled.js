import styled from 'styled-components';

export const PaginationContainer = styled.div`
    width: 296px;
    height: 26px;
    bottom: 20px;
    left: calc(50% - 296px / 2);
    gap: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
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
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
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
`;
