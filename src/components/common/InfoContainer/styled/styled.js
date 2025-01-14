import styled from 'styled-components';

export const InfoContainer = styled.div`
    position: absolute;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    top: ${(props) => props.$top};
    left: ${(props) => props.$left};
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const Logo = styled.img`
    position: absolute;
    top: calc(-1 * 170px / 2);
    left: 50%;
    transform: translateX(-50%);
    width: 170px;
    height: 170px;
    z-index: 10;
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
    gap: 10px;
    width: 100%;
    margin-top: 30px;
`;
