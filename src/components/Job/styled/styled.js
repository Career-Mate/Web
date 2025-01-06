import styled from 'styled-components'

export const Container = styled.div`
    width: fit-content;
    height: 20px;
    border-radius: 30px;
    border: 5px solid ${(props)=>props.type === "backend" ? '#FFB861' : '#A8D4BA'};
    background-color: #FFFFFF;
    padding: 8px 8px;  
`

export const Text = styled.span`
    font-family: "Albert Sans";
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.4px;
    color: ${(props)=>props.type === "backend" ? '#FFB861' : '#A8D4BA'};
`