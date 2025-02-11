import styled from 'styled-components';

export const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 340px;
    gap: 10px;
    padding-bottom: 65px;
    @media (max-width: 391px) {
        padding-bottom: 0px;
    }
`;

export const TemplateTitle = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 39px;
    letter-spacing: -0.011em;
    color: #000000;
    margin: 0;
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

export const CharCount = styled.div`
    font-size: 7px;
    color: ${(props) => (props.$charCount >= props.$maxCount ? 'red' : 'grey')};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    margin-top: 30px;
`;

export const TextareaWrapper = styled.div`
    width: 320px;
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
