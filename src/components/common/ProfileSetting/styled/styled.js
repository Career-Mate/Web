import styled from 'styled-components';

export const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    @media (max-width: 431px) {
        gap: 50px;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 431px) {
        gap: 10px;
    }
`;
