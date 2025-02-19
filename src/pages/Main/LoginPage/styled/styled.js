import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 74px;

    @media (max-width: 431px) {
        gap: 30px;
    }
`;

export const Text = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

export const SocialButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    font-size: 20px;

    a {
        font-style: none;
        text-decoration: none;
    }
`;

export const SocialButton = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${({ $type }) => ($type === 'naver' ? 'rgba(3, 199, 90, 1)' : 'rgba(254, 229, 0, 1)')};
    color: ${({ $type }) => ($type === 'naver' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    border-radius: 5px;
    cursor: pointer;
    font-style: none;
`;

export const SocialImg = styled.img`
    width: 16px;
    height: fit-content;

    @media (max-width: 1024px) {
        width: 20px;
    }
    @media (max-width: 431px) {
        width: 14px;
    }
`;
