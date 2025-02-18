import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 310px;
    height: 300px;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    box-shadow:
        2px 2px 5.6px 0px #00000040,
        inset 0px 0px 6.6px 0px #00000040;
    padding: 24px 26px;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 18px;
    gap: 10px;

    @media (max-width: 431px) {
        width: 295px;
        height: 295px;
    }
`;
export const Thumbnail = styled.div`
    width: 260px;
    height: 150px;
    background-color: gray;
    border-radius: 20px;

    @media (max-width: 431px) {
        width: 245px;
        height: 145px;
    }

    animation: pulse 1.5s infinite ease-in-out;
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const Line = styled.div`
    border-top: 2px dashed #c4c4c4;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    width: 100%;
`;
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const Title = styled.div`
    width: ${({ $width }) => $width};
    height: 20px;
    background-color: gray;
    border-radius: 20px;

    animation: pulse 1.5s infinite ease-in-out;
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const DeadlineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    justify-content: end;
`;

export const ScrapIcon = styled.img`
    width: 27px;
    height: 27px;
    cursor: pointer;
    box-shadow: inset -6px 2px 0px rgba(255, 255, 255, 0.25);
    &:hover {
        opacity: 0.7;
    }
`;
