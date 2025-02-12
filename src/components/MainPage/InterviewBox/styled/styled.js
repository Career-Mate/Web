import styled from 'styled-components';

export const InterviewBoxContainer = styled.div`
    display: flex;
    flex-direction: ${({ $type }) => ($type === 'left' ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 430px) {
        flex-direction: column;
    }
`;

export const TextWrapper = styled.div`
    background-color: white;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
    padding: 32px 41px;
    width: 617px;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: ${({ $type }) => ($type === 'left' ? 'translateX(30px)' : 'translateX(-30px)')};

    @media (max-width: 1024px) {
        width: 354px;
        transform: ${({ $type }) => ($type === 'left' ? 'translateX(35px)' : 'translateX(-35px)')};
        padding: 16px;
    }

    @media (max-width: 430px) {
        width: 307px;
        transform: ${({ $type }) => ($type === 'left' ? 'translateX(0)' : 'translateX(-0)')};
        transform: translateY(-10px);
        padding: 16px;
    }
`;

export const Text = styled.div`
    text-align: center;
    width: 577px;
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 14px;
        width: 269px;
    }
    @media (max-width: 430px) {
        font-size: 10px;
        width: 269px;
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(209, 244, 224, 1);
    width: 268px;
    height: 268px;
    z-index: 2;
    margin-left: ${({ $type }) => ($type === 'left' ? '20px' : '0')};
    margin-right: ${({ $type }) => ($type === 'right' ? '20px' : '0')};

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1024px) {
        width: 143px;
        height: 143px;
    }
`;
