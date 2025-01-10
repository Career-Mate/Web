import React from 'react';
import * as S from './styled/styled'; 

const Container = ({ children }) => {
    return (
        <S.ModalContainer> 
            <S.ModalContent>{children}</S.ModalContent>
        </S.ModalContainer>
    );
};

export default Container;
