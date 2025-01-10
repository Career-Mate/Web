import styled from "styled-components";

export const StyledButton = styled.button`
    
    width: ${(props) => props.width || '536px'};
    height: ${(props) => props.height || '85px'};
    padding: ${(props) => props.padding || '20px 88px'};
    border-radius: 56px;
    border: none;
    
    font-family: "Albert Sans";
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    
    color: black;
    background-color: ${(props) => props.backgroundColor || 'white'};
    
    &:active {
    transform: scale(0.99);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    
    &:hover {
        cursor: pointer;
    };
`;