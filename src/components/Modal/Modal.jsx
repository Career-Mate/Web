import React from 'react';
import * as S from './styled/styled';
import loadingIcon from '../../assets/loader.png';

const Modal = ({ text, onCancel }) => {
    return (
        <S.ModalOverlay>
            <S.ModalWrapper>
                <S.ModalContent>
                    <S.TextGroup>
                        <S.Text>{text}</S.Text>
                        <S.Loading>
                            잠시만 기다려 주세요...
                            <S.Loader src={loadingIcon}/> {/* %%%%%%%%%% */}
                        </S.Loading>
                    </S.TextGroup>
                    <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                </S.ModalContent>
            </S.ModalWrapper>
        </S.ModalOverlay>
    );
};

export default Modal;
