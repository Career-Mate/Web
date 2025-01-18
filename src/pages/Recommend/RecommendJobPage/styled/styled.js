import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TopContainer = styled.div`
    width: inherit;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 38px;
`;

export const TextWrapper = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Title = styled.span`
    font-size: 29px;
    font-weight: 700;
`;

export const Highlight = styled.span`
    font-weight: 700;
    font-size: inherit;
    color: inherit;
`;

export const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
`;

export const BottomContainer = styled.div`
    width: inherit;
    height: fit-content;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
    padding-bottom: 190px;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    max-width: 1282px;
`;

export const TopCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 41px;
    width: 100%;
    max-width: 1282px;
`;

export const BottomCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0px;
    gap: 41px;
    width: 100%;
    max-width: 1282px;
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;

    & > :nth-child(2) {
        margin-left: auto;
    }
`;
