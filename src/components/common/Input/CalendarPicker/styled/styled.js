import styled from 'styled-components';

export const DatePickerRow = styled.div`
    width: ${(props) => (props.type === 'CareerTemplate' ? '400px' : '600px')};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 431px) {
        width: ${(props) => (props.type === 'CareerTemplate' ? '200px' : '320px')};
    }
`;

export const DateInput = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isInline',
})`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 431px) {
        .react-datepicker {
            font-size: 12px;
            width: 180px;
        }
        .react-datepicker__day {
            width: 1.2rem;
            height: 1.2rem;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .react-datepicker__header {
            width: 180px;
            font-size: 11px;
        }
        .react-datepicker__day-names {
            display: flex;
            justify-content: space-between;
        }
        .react-datepicker__week {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    input {
        font-size: 12px;
        width: 130px;
        border: none;
        background: ${(props) => (props.isInline ? 'none' : '#FFFFFF')};
        padding: ${(props) => (props.isInline ? '0' : '4px 8px')};
        outline: none;

        @media (max-width: 1024px) {
            font-size: ${(props) => (props.type === 'CareerTemplate' ? '12px' : '16px')};
            width: ${(props) => (props.type === 'CareerTemplate' ? '200px' : '200px')};
        }

        @media (max-width: 431px) {
            font-size: ${(props) => (props.type === 'CareerTemplate' ? '8px' : '10px')};
            width: ${(props) => (props.type === 'CareerTemplate' ? '80px' : '100px')};
            padding: 0px 0px 8px 0px;
        }
    }
`;

export const Icon = styled.img`
    width: ${({ $size }) => $size || '26px'};
    height: ${({ $size }) => $size || '26px'};
    cursor: pointer;

    @media (max-width: 1024px) {
        width: ${(props) => (props.type === 'CareerTemplate' ? '20px' : '26px')};
        height: ${(props) => (props.type === 'CareerTemplate' ? '20px' : '26px')};
    }

    @media (max-width: 431px) {
        width: ${(props) => (props.type === 'CareerTemplate' ? '10px' : '18px')};
        height: ${(props) => (props.type === 'CareerTemplate' ? '10px' : '18px')};
    }
`;

export const DateDivider = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #d9d9d9;
    padding-right: 0px;

    @media (max-width: 1024px) {
        font-size: ${(props) => (props.type === 'CareerTemplate' ? '12px' : '16px')};
        padding-right: ${(props) => (props.type === 'CareerTemplate' ? '50px' : '0px')};
    }

    @media (max-width: 431px) {
        font-size: ${(props) => (props.type === 'CareerTemplate' ? '8px' : '16px')};
        padding: 0 5px;
    }
`;
