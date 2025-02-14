import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: auto;
`;

export const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
`;

export const SaveButtonWrapper = styled.div`
    position: sticky;
    bottom: 16px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;
