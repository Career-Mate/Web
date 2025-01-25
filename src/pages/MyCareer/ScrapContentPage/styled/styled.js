import styled from 'styled-components';

export const Container = styled.div``;

export const ContentContainer = styled.div`
    padding-bottom: 20px;
    width: 100%;
    max-width: 1200px;
`;

export const JobContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 200px;
    width: 100%;
    max-width: 1200px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding-bottom: 30px;
`;

export const PinIcon = styled.img`
    width: 32px;
    height: 32px;
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: baseline;
    gap: 5px;
`;

export const Title = styled.span`
    font-size: 24px;
    font-weight: 600;
`;

export const Highlight = styled.span`
    background-color: #aaffda;
    font-size: 24px;
    font-weight: 600;
`;

export const ScrollArea = styled.div`
    display: flex;
    gap: 43px;
    overflow-x: auto;
    padding-bottom: 20px;
    height: 405px;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c2c2c2;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f4f4f4;
    }
`;

export const Line = styled.div`
    height: 2px;
    width: 912px;
    border-top: 2px dashed #c4c4c4;
`;

export const EmptyMessage = styled.div`
    width: 912px;
    height: 405px;
    color: #c4c8ce;
    font-weight: 500;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
