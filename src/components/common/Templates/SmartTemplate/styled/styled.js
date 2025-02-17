import styled from 'styled-components';

export const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 850px;
    gap: 10px;
    padding-bottom: 65px;

    @media (max-width: 1024px) {
        width: 640px;
    }
    @media (max-width: 431px) {
        width: fit-content;
    }
`;

export const TemplateTitle = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: -0.011em;
    color: #000000;
    margin: 0;
`;

export const TemplateTable = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableRow = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    &:last-child {
        border-bottom: none;
    }
`;

export const TableCellHeader = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    position: relative;
    width: 35%;
    background: #b6e3cf;
    display: flex;
    align-items: center;
    padding: 20px;
    font-weight: 700;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-left-radius: ${(props) => (props.isLastRow ? '12px' : '0')};
`;

export const TableCellData = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    flex-grow: 1;
    background: #ffffff;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    overflow-wrap: break-word;
    white-space: normal;
    border-top-right-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-right-radius: ${(props) => (props.isLastRow ? '12px' : '0')};
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

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;

    @media (max-width: 431px) {
        margin-top: 30px;
    }
`;
