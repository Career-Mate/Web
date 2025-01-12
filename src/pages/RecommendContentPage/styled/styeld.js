import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const TopContainer = styled.div`
    width: inherit;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 38px;
`
export const TextWrapper = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
export const Title = styled.span`
    font-size: 29px;
    font-weight: 700;
`
export const Highlight = styled.span`
    font-weight: 700;
    font-size: inherit;
    color: inherit;
`
export const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
`

export const BottomContainer = styled.div`
    width: inherit;
    height: fit-content;
    background-color: #EFEFEF;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 56px;

    padding-bottom: 190px;
`
export const JobBox = styled.div`
    width: 509px;

    padding: 18px 46px 18px 46px;
    
    border-radius: 20px;
    border: 4px solid #84D0B1;
    box-shadow: 0px 0px 6.8px 0px #00000040;
    box-shadow: 0px 0px 14.5px 0px #00000040 inset;
    background-color: #FFFFFF;

    margin-top: 40px;
    margin-bottom: 56px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    font-weight: 400;
    font-size: 29px;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`