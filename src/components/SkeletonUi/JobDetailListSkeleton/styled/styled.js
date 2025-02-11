import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;

    animation: pulse 1.5s infinite ease-in-out;
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const SectionTitle = styled.span`
    width: 100px;
    height: 30px;
    background-color: darkgray;
    border-radius: 20px;
`;
export const Item = styled.span`
    width: 300px;
    height: 27px;
    background-color: darkgray;
    border-radius: 20px;
`;
