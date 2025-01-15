import styled from "styled-components";

export const StyledButton = styled.button`
    
    width: ${(props) => props.$width || '536px'};
    height: ${(props) => props.$height || '85px'};
    padding: ${(props) => props.$padding || '20px 88px'};
    border-radius: 56px;
    border: none;
    
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    
    color: black;
    background-color: ${(props) => props.$backgroundColor || 'white'};

    box-shadow: 0px 0px 10px 0px #00000040;

    
    &:active {
    transform: scale(0.99);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    
    &:hover {
        cursor: pointer;
    };
`;