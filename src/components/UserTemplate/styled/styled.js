import styled from 'styled-components';

export const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 983px;
    gap: 10px;
    padding-bottom: 65px;
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
    width: 976px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TableRow = styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-child {
        border-bottom: none;
    }
`;

export const TableCellHeader = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    width: 208px;
    background: #b6e3cf;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.8);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-left-radius: ${(props) => (props.isLastRow ? '12px' : '0')};
`;

export const TableCellData = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    flex-grow: 1;
    width: 768px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-top-right-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-right-radius: ${(props) => (props.isLastRow ? '12px' : '0')};

    input {
        width: 100%;
        border: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.8);
        background: none;
        outline: none;
    }
`;
