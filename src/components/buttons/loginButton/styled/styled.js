import styled from "styled-components"

const colorPalette = {
    active : ' #2B9D8F',
    unactive: ' #C4C8CE'
}
export const Default = styled.button`
    
    //button design
    width: ${(props) => props.width || '230px'};
    height: ${(props) => props.height || '49px'};
    padding: 10px 68px;
    border-radius: ${(props) => props.type === 'membership' ? '0px 8px 8px 0px' : '8px 0px 0px 8px'};
    border: none;
    //font 설정
    font-family: "Albert Sans";
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    //색상 설정
    color: white;
    background-color: ${(props) => colorPalette[props.status] || colorPalette["active"]};
    //action시
    &:active {
    transform: scale(0.99);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    
    &:hover {
        cursor: pointer;
    };
`;