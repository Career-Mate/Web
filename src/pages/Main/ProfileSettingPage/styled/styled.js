import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 110px 0;
    position: relative;
`;

export const MobileContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        margin-top: 60px;
        font-size: 16px;
        font-weight: 700;
    }
`;

export const SettingsWrapper = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 431px) {
        margin-bottom: 100px;
    }
`;

export const SettingText = styled.h1`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    text-align: center;

    @media (max-width: 431px) {
        font-size: 14px;
    }
`;
