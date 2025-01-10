import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ $width }) => $width};
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    box-shadow:
        2px 2px 5.6px 0px #00000040,
        inset 0px 0px 6.6px 0px #00000040;
    padding: 24px 26px;
    gap: 10px;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 18px;
`;

export const CompanyName = styled.div`
    color: #c4c4c4;
`;

export const Thumbnail = styled.img`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 20px;
    object-fit: cover;
`;

export const Line = styled.div`
    border-top: 2px dashed #C4C4C4;W
    width: 100%;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`;

export const Title = styled.div`
    word-break: keep-all;
    max-width: 290px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const DetailButton = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ $type }) => ($type ? '#000000' : '#00000080')};
    cursor: pointer;
`;

export const DeadlineWrapper = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Deadline = styled.div`
    color: #ff0000;
    font-size: 20px;
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
