import styled from 'styled-components';

export const CareerSavePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: calc(100vh - 300px);
    background-color: white;

    @media (max-width: 1024px) {
        min-height: calc(100vh - 500px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
