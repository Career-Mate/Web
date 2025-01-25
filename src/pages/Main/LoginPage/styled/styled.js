import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 74px;
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
    width: 503px;
    height: 57px;
    border-radius: 5px;
    cursor: pointer;
`;
