import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
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
`;

export const CompanyNameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;
export const CompanyName = styled.div`
    width: 130px;
    height: 24px;
    border-radius: 20px;
    background-color: gray;
`;

export const Thumbnail = styled.div`
    width: 260px;
    height: 130px;
    border-radius: 20px;
    background-color: gray;
`;

export const Line = styled.div`
    border-top: 2px dashed #c4c4c4;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 25px;
`;

export const Title = styled.div`
    width: 200px;
    height: 20px;
    border-radius: 20px;
    background-color: gray;
`;

export const DeadlineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Deadline = styled.div`
    width: 70px;
    height: 20px;
    border-radius: 20px;
    background-color: gray;
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
