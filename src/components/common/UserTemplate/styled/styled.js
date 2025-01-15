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
    padding: 20px;
    overflow-wrap: break-word;
    white-space: normal;
    border-top-right-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-right-radius: ${(props) => (props.isLastRow ? '12px' : '0')};

    textarea {
        width: 100%;
        height: 30px;
        display: flex;
        border: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.8);
        background: none;
        outline: none;
        resize: none;
        overflow: hidden;
        white-space: normal;
        word-wrap: break-word;
        box-sizing: border-box;
    }
`;

export const Tooltip = styled.div`
    position: absolute;
    width: 250px;
    height: auto;
    left: -10px;
    top: -75px;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 12px;
    z-index: 10;

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 30px;
        width: 0;
        height: 0;
        border-left: -5px solid transparent;
        border-right: 40px solid transparent;
        border-top: 15px solid #ffffff;
    }
`;

export const TooltipText = styled.div`
    font-size: 11px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.5;
    text-align: center;
`;

export const IconWrapper = styled.span`
    margin-left: 5px;
    color: #ff0000;
    cursor: pointer;
    position: relative;

    &:hover ${Tooltip} {
        display: block;
    }
`;

export const DatePickerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
`;

export const DateInput = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    .calendar-icon {
        font-size: 16px;
        color: #c4c4c4;
    }

    input {
        font-size: 16px;
        width: ${(props) => (props.isInline ? 'auto' : '200px')};
        border: none;
        background: ${(props) => (props.isInline ? 'none' : '#ffffff')};
        padding: ${(props) => (props.isInline ? '0' : '4px 8px')};
        outline: none;
    }
`;

export const DateDivider = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #d9d9d9;
    padding-right: 20px;
`;
