import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    max-width: 416px;
    border: 1px solid #C4C4C4;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 24px 26px;
    gap:10px;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 20px;
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 210px
    border-radius: 20px;
    object-fit: cover;
`;

export const Content=styled.div`
    border-top: 2px dashed #C4C4C4;
    padding-top:20px;
`;

export const Title = styled.div`
    margin-bottom: 8px;
    color: #333;
`;

export const CompanyName = styled.div`
    color: #C4C4C4;
`;

export const DeadlineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
`;

export const Deadline = styled.div`
    color: #FF0000;
`;

export const ScrapIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;