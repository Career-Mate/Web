import React from 'react';
import * as S from './styled/styled';
import loadingIcon from '../../../assets/loader.svg';

const LoadingModal = ({ text, onCancel }) => {
    return (
        <S.ModalOverlay>
            <S.ModalContainer>
                <S.ModalWrapper>
                    <S.TextWrapper>
                        <S.StyledText>{text}</S.StyledText>
                        <S.Loading>
                            잠시만 기다려 주세요...
                            <S.Loader src={loadingIcon} />
                        </S.Loading>
                    </S.TextWrapper>
                    <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                </S.ModalWrapper>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
};

export default LoadingModal;
