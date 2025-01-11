import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`
export const TopContainer = styled.div`
    width: 1440px;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 1440px;
    height: 736px;
`