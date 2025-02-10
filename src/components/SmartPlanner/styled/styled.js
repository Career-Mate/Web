import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const InputContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;
export const HideOnSmall = styled.div`
    display: block;
    @media (max-width: 391px) {
        display: none;
    }
`;
export const ShowOnSmall = styled.div`
    display: none;
    @media (max-width: 391px) {
        display: block;
    }
`;
