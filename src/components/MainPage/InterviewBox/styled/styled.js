import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: ${({ $type }) => ($type === 'left' ? 'row' : 'row-reverse')};
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const TextWrapper = styled.div`
    background-color: white;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
    padding: 32px 41px;
    width: 740px;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: ${({ $type }) => ($type === 'left' ? 'translateX(30px)' : 'translateX(-30px)')};
`;

export const Text = styled.div`
    text-align: center;
    width: 577px;
    font-size: 20px;
    font-weight: 600;
`;

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(209, 244, 224, 1);
    width: 297px;
    height: 297px;
    z-index: 2;
    margin-left: ${({ $type }) => ($type === 'left' ? '20px' : '0')};
    margin-right: ${({ $type }) => ($type === 'right' ? '20px' : '0')};

    img {
        width: 100%;
        height: 100%;
    }
`;
