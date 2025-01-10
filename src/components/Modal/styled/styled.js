import styled from 'styled-components';

export const ModalContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;

    /* 내부 콘텐츠 크기에 맞게 조절 */
    display: inline-block;
    max-width: 90vw; /* 화면 너비의 90%까지만 확장 가능 */
    max-height: 90vh; /* 화면 높이의 90%까지만 확장 가능 */
    overflow: auto; /* 내용이 넘칠 경우 스크롤 */
`;

export const ModalContent = styled.div`
    padding: 20px;
    position: relative;
`;
