import styled from 'styled-components';

export const InfoContainer = styled.div`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: visible;
    margin-top: ${(props) => `calc(${props.$top} * 0.5)`};
    margin-bottom: ${(props) => `calc(${props.$top} * 0.7)`};
    position: relative;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const Logo = styled.img`
    width: 160px; /* 로고 크기 조정 */
    height: auto;
`;

export const TitleText = styled.div`
    width: 240px;
    height: 104px;
    position: absolute;
    top: calc(-1 * 52px / 2);
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    font-weight: 700;
    color: #000000;
    background-color: white;
    text-align: center;
    z-index: 10;
`;

export const ContentWrapper = styled.div`
    width: 'auto';
    height: 'auto';
    top: '50%';
    left: '50%';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: auto;
    height: auto;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;
export const MainText = styled.h2`
    font-size: 36px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin-bottom: 0px;
`;

export const DetailText = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    margin-top: 30px;
`;
