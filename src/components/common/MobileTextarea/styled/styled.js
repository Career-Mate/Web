import styled from 'styled-components';

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

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 34px;
    border: none;
    outline: none;
    resize: none;
    font-size: 12px;
    color: #333;
    background-color: transparent;
    padding: 0;

    ::placeholder {
        color: #b0b0b0;
    }
`;

export const CharCount = styled.div`
    font-size: 7px;
    color: ${(props) => (props.$charCount >= props.$maxCount ? 'red' : 'grey')};
`;
