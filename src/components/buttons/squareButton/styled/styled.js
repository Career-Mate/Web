import styled from "styled-components"

const colorPalette = {
    deepgreen : ' #2B9D8F',
    green : ' #66CCAA',
    lightgreen : ' #A8D5BA',
    grey : ' #C4C8CE'
}
export const Default = styled.button`
    
    //button design
    width: ${(props) => props.width || '372px'};
    height: ${(props) => props.height || '59px'};
    top: 20px;
    left: 20px;
    padding: 20px 88px;
    border-radius: 10px;
    border: none;

    //font 설정
    font-family: "Albert Sans";
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;

    //색상 설정
    color: white;
    background-color: ${(props) => colorPalette[props.backgroundColor] || colorPalette["deepgreen"]};

    //action시
    &:active {
    transform: scale(0.99);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    
    &:hover {
        cursor: pointer;
    };
`;
