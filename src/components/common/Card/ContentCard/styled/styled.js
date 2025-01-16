import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ $width }) => $width};
    height: 380px;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    box-shadow:
        2px 2px 5.6px 0px #00000040,
        inset 0px 0px 6.6px 0px #00000040;
    padding: 24px 26px;
    gap: ${({ $type }) => ($type ? '10px' : '8px')};
    box-sizing: border-box;
    font-weight: 600;
    font-size: 18px;
`;

export const CompanyName = styled.div`
    transform: ${({ $type }) => ($type ? 'none' : 'translateY(-3px)')};
    color: #c4c4c4;
`;

export const Thumbnail = styled.img`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 20px;
    object-fit: cover;
    transform: ${({ $type }) => ($type ? 'none' : 'translateY(-3px)')};
`;

export const Line = styled.div`
    border-top: 2px dashed #C4C4C4;W
    width: 100%;
    transform: ${({ $type }) => ($type ? 'none' : 'translateY(-3px)')};
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: ${({ $type }) => ($type ? 'none' : '2px')};
    transform: ${({ $type }) => ($type ? 'none' : 'translateY(-3px)')};
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
    flex-grow: 1;
`;

export const DetailButton = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ $type }) => ($type ? '#000000' : '#00000080')};
    cursor: pointer;
`;

export const DeadlineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Deadline = styled.div`
    color: #ff0000;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    display: flex;
    align-items: center;
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
