import styled from 'styled-components';

export const ButtonContainer = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
    font-size: 20px;
    color: ${({ isSelected }) => (isSelected ? '#2B9D8F' : '#C4C8CE')};
    padding: 5px 10px;
    cursor: pointer;

    &::after {
        content: '';
        height: 2px;
        background-color: ${({ isSelected }) => (isSelected ? '#2B9D8F' : '#E9EBED')};
        margin-top: 1px;
    }

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 391px) {
        font-size: 16px;
        padding: 2px 5px;
    }
`;
