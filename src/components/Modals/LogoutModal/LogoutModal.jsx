import React from 'react';
import * as S from './styled/styled';

const LogoutModal = ({ onCancel, onLogout }) => {
    return (
        <S.ModalOverlay>
            <S.ModalContainer>
                <S.ModalWrapper>
                    <S.TextWrapper>
                        <S.StyledText>로그아웃</S.StyledText>
                        <S.Logout>
                            정말 로그아웃 하시겠어요? 
                        </S.Logout>
                    </S.TextWrapper>
                    <S.ButtonWrapper>
                        <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                        <S.LogoutButton onClick={onLogout}>로그아웃</S.LogoutButton>
                    </S.ButtonWrapper>
                </S.ModalWrapper>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
};

export default LogoutModal;
