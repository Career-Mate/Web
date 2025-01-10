import styled from "styled-components";

export const LogoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: fit-content; 
    height: 21px;
    gap: 5px;
`
export const NameLabel = styled.label`
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
    text-align: center;
`
export const Seperator = styled.label`
    height: 14px;
`
export const StyledButton = styled.button`
    height: 14px;
    background-color: transparent;
    border: none;
    padding-left: 0px;
    &:active {
    transform: scale(0.99);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    
    &:hover {
        cursor: pointer;
    };

`