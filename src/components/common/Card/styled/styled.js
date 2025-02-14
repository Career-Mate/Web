import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 309px;
    height: 301px;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    box-shadow:
        2px 2px 5.6px 0px #00000040,
        inset 0px 0px 6.6px 0px #00000040;
    padding: ${({ $type }) => ($type ? '24px 26px' : '16px 26px')};
    gap: ${({ $type }) => ($type ? '8px' : '9px')};
    box-sizing: border-box;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    @media (max-width: 1024px) {
        width: 306px;
        height: 307px;
    }

    @media (max-width: 431px) {
        width: 294px;
        height: 293px;
        font-size: 16px;
        padding: 19px;
    }
`;

export const CompanyName = styled.div`
    text-align: center;
    font-size: 20px;
    color: #8f8f8f;
    overflow: hidden;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
`;

export const Thumbnail = styled.img`
    width: 257px;
    height: ${({ $type }) => ($type ? '153px' : '130px')};
    border-radius: 20px;
    object-fit: cover;

    @media (max-width: 1024px) {
        width: 254px;
        height: ${({ $type }) => ($type ? '160px' : '125px')};
    }

    @media (max-width: 431px) {
        width: 254px;
        height: ${({ $type }) => ($type ? '145px' : '120px')};
        font-size: 16px;
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
`;

export const Title = styled.div`
    word-break: keep-all;
    max-width: 290px;
    display: -webkit-box;
    -webkit-line-clamp: ${({ $type }) => ($type ? '2' : '1')};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    line-height: 22px;
    flex-grow: 1;
`;

export const DeadlineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({ $type }) => ($type ? 'flex-end' : 'space-between')};
    align-items: center;
`;

export const Deadline = styled.div`
    color: #ff0000;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    display: flex;
    align-items: center;

    @media (max-width: 431px) {
        height: 28px;
    }
`;

export const ScrapIcon = styled.img`
    width: 27px;
    height: 27px;
    cursor: pointer;
    box-shadow: inset -6px 2px 0px rgba(255, 255, 255, 0.25);
    margin-left: auto;
    &:hover {
        opacity: 0.7;
    }
`;
