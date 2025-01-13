import styled from 'styled-components';

export const CareerSavePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: calc(100vh - 500px);
    padding: 48px 16px;
    background-color: white;
    position: relative;
`;

export const LogoWrapper = styled.div`
    position: relative;
    z-index: 2;
    margin-top: -20px;
    margin-bottom: -50px;

    img {
        width: 186px;
        height: auto;
    }
`;

export const InfoContainerWrapper = styled.div`
    box-sizing: border-box;
    width: 981px;
    height: 393.27px;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.23);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    position: relative;
    z-index: 1;
`;
