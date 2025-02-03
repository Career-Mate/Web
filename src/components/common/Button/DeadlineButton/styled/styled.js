import styled from 'styled-components';

export const ButtonContainer = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected',
})`
    padding: 5px 15px;
    width: fit-content;
    height: 40px;
    background-color: ${(props) => (props.isSelected ? '#FFFFFF' : '#E9EBED')};
    border: 1px solid #c4c8ce;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => (props.isSelected ? '#000000' : '#C4C8CE')};

    &:active {
        transform: scale(0.99);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        cursor: pointer;
    }
`;
