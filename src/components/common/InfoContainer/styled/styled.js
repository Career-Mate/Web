import styled from 'styled-components';

export const InfoContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;
    display: inline-block;
    max-width: 60vw;
    max-height: 60vh;
    overflow: auto;
`;

export const ContainerContent = styled.div`
    padding: 20px;
    position: relative;
`;
