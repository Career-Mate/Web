import styled from 'styled-components';

export const BarContainer = styled.div`
    width: 248px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: end;

    @media (max-width: 1024px) {
        width: 180px;
    }
    @media (max-width: 391px) {
        width: 120px;
    }
`;
export const Text = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #66ccaa;

    @media (max-width: 1024px) {
        font-size: 14px;
    }
`;
export const RectangleWrapper = styled.div`
    width: inherit;
    display: flex;
    flex-direction: row;
    gap: 12px;
    @media (max-width: 1024px) {
        gap: 8px;
    }
    @media (max-width: 391px) {
        gap: 5px;
    }
`;
export const Rectangle = styled.div`
    width: 40px;
    height: 10px;
    background-color: ${(props) => (props.$status === 'done' ? '#66CCAA' : '#D9D9D9')};
    ${(props) => {
        switch (props.$type) {
            case 0:
                return 'border-radius: 5px 0 0 5px;';
            case 4:
                return 'border-radius: 0 5px 5px 0;';
            default:
                return 'border-radius: 0;';
        }
    }}

    @media (max-width:1024px) {
        width: 30px;
        height: 10px;
    }
    @media (max-width: 391px) {
        width: 20px;
        height: 5px;
    }
`;
