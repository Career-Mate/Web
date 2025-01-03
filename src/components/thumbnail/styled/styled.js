import styled from "styled-components";

export const Wrapper = styled.div`
    width: ${(props) => props.width || '391px'};
    height: ${(props) => props.height || '210px'};
    border-radius: 20px;
    background-color: gray;
`
export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`