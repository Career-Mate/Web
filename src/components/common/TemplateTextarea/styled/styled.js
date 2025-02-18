import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 30px;
    display: flex;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    background: none;
    outline: none;
    resize: none;
    overflow: hidden;
    white-space: normal;
    word-wrap: break-word;
    box-sizing: border-box;

    @media (max-width: 431px) {
        font-size: 12px;
        height: 34px;
        color: #333;
        padding: 0;
        ::placeholder {
            color: #b0b0b0;
        }
    }
`;
export const CharCount = styled.div`
    font-size: 8px;
    @media (max-width: 431px) {
        font-size: 7px;
    }
    color: ${(props) => (props.$charCount >= props.$maxCount ? 'red' : 'grey')};
`;
