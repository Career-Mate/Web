import styled from 'styled-components';

const colorPalette = {
    deepgreen: ' #2B9D8F',
    green: ' #66CCAA',
    lightgreen: ' #A8D5BA',
    grey: ' #C4C8CE',
};

export const StyledButton = styled.button`
    width: ${(props) => props.$width || '372px'};
    height: ${(props) => props.$height || '59px'};

    border-radius: 10px;
    border: none;

    text-align: center;
    justify-content: center;
    font-size: ${(props) => props.$fontSize || '20px'};
    font-weight: 400;

    @media (max-width: 391px) {
        width: ${(props) => props.$mobileWidth || '360px'};
        height: ${(props) => props.$mobileHeight || '40px'};
        font-size: ${(props) => props.$mobileFontSize || '16px'};
    }

    color: white;
    background-color: ${(props) => colorPalette[props.$backgroundColor] || colorPalette['deepgreen']};

    &:active {
        transform: scale(0.99);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        cursor: pointer;
    }
`;
