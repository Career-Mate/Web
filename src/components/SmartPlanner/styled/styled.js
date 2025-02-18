import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const InputContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SectionLabel = styled.h4`
    font-family: Pretendard;
    font-weight: 500;
    font-size: 14px;
    line-height: 16.71px;
    letter-spacing: 0%;
`;
export const TextareaWrapper = styled.div`
    width: 340px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    padding: 15px 20px 5px 20px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: end;

    &:focus-within {
        border-color: #a0a0a0;
        box-shadow: 0 0 5px rgba(160, 160, 160, 0.5);
    }
`;
