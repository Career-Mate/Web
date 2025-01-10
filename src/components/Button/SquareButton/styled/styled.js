import styled from "styled-components"
const colorPalette = {
    deepgreen : ' #2B9D8F',
    green : ' #66CCAA',
    lightgreen : ' #A8D5BA',
    grey : ' #C4C8CE'
}
export const StyledButton = styled.button`
    
    width: ${(props) => props.width || '372px'};
    height: ${(props) => props.height || '59px'};
    padding: ${(props) => props.padding || '10px 20px'};
    border-radius: 10px;
    border: none;
    font-family: "Albert Sans";
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: white;
    background-color: ${(props) => colorPalette[props.backgroundColor] || colorPalette["deepgreen"]};
    
    &:active {
    transform: scale(0.99);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    
    &:hover {
        cursor: pointer;
    };
`;