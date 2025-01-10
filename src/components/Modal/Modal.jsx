import React from 'react';
import * as S from './styled/styled';

const Modal = ({ children }) => {
    return (
        <S.ModalContainer>
            <S.ModalContent>{children}</S.ModalContent>
        </S.ModalContainer>
    );
};

export default Modal;
