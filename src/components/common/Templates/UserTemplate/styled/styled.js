import styled from 'styled-components';

export const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    gap: 10px;
    padding-bottom: 65px;

    @media (max-width: 1024px) {
        width: 760px;
        padding-bottom: 50px;
    }

    @media (max-width: 431px) {
        width: 350px;
        padding-bottom: 40px;
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const TemplateTitle = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: -0.011em;
    color: #000000;
`;

export const TemplateTable = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;
    background: #ffffff;
    border-radius: 12px;
    border: 2px solid rgba(0, 0, 0, 0.2);
`;

export const TableRow = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);

    &:last-child {
        border-bottom: none;
    }
`;

export const TableCellHeader = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    position: relative;
    width: 240px;
    background: #b6e3cf;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.8);
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: ${(props) => (props.isFirstRow ? '10px' : '0')};
    border-bottom-left-radius: ${(props) => (props.isLastRow ? '10px' : '0')};
    white-space: pre-wrap;

    @media (max-width: 1024px) {
        width: 226px;
    }

    @media (max-width: 431px) {
        width: 300px;
        font-size: 8px;
        padding: 5px 10px;
        line-height: 15px;
    }
`;

export const TableCellData = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    flex-grow: 1;
    width: 768px;
    background: #ffffff;
    display: flex;
    align-items: flex-start;
    padding: 20px;
    overflow-wrap: break-word;
    white-space: normal;
    border-top-right-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-right-radius: ${(props) => (props.isLastRow ? '12px' : '0')};

    textarea {
        width: 100%;
        height: auto;
        display: flex;
        border: none;
        font-weight: 500;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.8);
        background: none;
        outline: none;
        resize: none;
        overflow: hidden;
        white-space: normal;
        word-wrap: break-word;
        box-sizing: border-box;
        word-break: break-word;
    }

    @media (max-width: 431px) {
        textarea {
            font-size: 8px;
        }

        padding: 10px;
    }
`;

export const Tooltip = styled.div`
    position: absolute;
    width: 210px;
    height: auto;
    left: -15px;
    top: -70px;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 10px;
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

    @media (max-width: 1024px) {
        width: 130px;
        top: -80px;
        left: -15px;
    }

    @media (max-width: 431px) {
        width: 80px;
        top: -50px;
        left: -20px;
        padding: 8px;
    }
`;

export const TooltipText = styled.div`
    font-size: 10px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.5;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;

    @media (max-width: 1024px) {
        font-size: 8px;
    }

    @media (max-width: 431px) {
        font-size: 5px;
    }
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
    width: 280px;
    gap: 20px;

    @media (max-width: 1024px) {
        width: 226px;
    }

    @media (max-width: 431px) {
        width: 100px;
        font-size: 10px;
    }
`;

export const DateInput = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isInline',
})`
    display: flex;
    align-items: center;
    gap: 5px;

    .calendar-icon {
        font-size: 12px;
        color: #c4c4c4;
    }

    input {
        font-size: 12px;
        font-weight: 500;
        width: ${(props) => (props.isInline ? 'auto' : '200px')};
        border: none;
        background: ${(props) => (props.isInline ? 'none' : '#ffffff')};
        padding: ${(props) => (props.isInline ? '0' : '4px 8px')};
        outline: none;
    }

    @media (max-width: 431px) {
        input {
            font-size: 8px;
            width: 80px;
        }

        .calendar-icon {
            font-size: 7px;
            color: #c4c4c4;
        }
    }
`;

export const DateDivider = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #d9d9d9;
    padding-right: 20px;

    @media (max-width: 431px) {
        font-size: 4px;
        padding-right: 0px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
`;

export const UploadButton = styled.button`
    background: rgb(200, 205, 200);
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 10px;
    width: 70px;
    text-align: center;
    z-index: 2;
    height: 30px;

    &:hover {
        background: rgb(107, 107, 107);
    }

    @media (max-width: 1024px) {
        font-size: 10px;
    }

    @media (max-width: 431px) {
        font-size: 6px;
        width: 40px;
        height: 18px;
        padding: 0 5px;
        margin-bottom: 20px;
    }
`;

export const CharCount = styled.div`
    font-size: 6px;
    color: ${(props) => (props.$charCount >= props.$maxCount ? 'red' : 'grey')};
    align-self: flex-end;

    @media (max-width: 431px) {
        font-size: 5px;
        padding: 0px;
    }
`;

export const UploadedImg = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 100px;

    @media (max-width: 431px) {
        max-width: 20%;
        max-height: 25px;
        margin: 0 20px;
    }
`;

export const UploadContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
`;
