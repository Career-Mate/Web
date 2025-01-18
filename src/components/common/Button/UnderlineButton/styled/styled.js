import styled from 'styled-components';

export const StyledButton = styled.button`
    color: #c4c8ce;
    width: fit-content;
    height: fit-content;
    border: none;

    background-color: transparent;

    span {
        font-weight: 400;
        font-size: ${(props) => props.$fontSize || '14px'};
        text-decoration: underline;

        display: inline-block;
        transition: transform 0.1s ease-in-out;

        &:active {
            transform: scale(0.95); /* 텍스트만 축소 */
        }
    }

    &:hover {
        cursor: pointer;
    }
`;
