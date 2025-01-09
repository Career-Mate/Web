import React from 'react';
import * as S from './styled/styled';

const LogoutPopup = ({ onCancel, onLogout }) => {
    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.TextWrapper>
                        <S.StyledText>로그아웃</S.StyledText>
                        <S.Logout>정말 로그아웃 하시겠어요?</S.Logout>
                    </S.TextWrapper>
                    <S.ButtonWrapper>
                        <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                        <S.LogoutButton onClick={onLogout}>로그아웃</S.LogoutButton>
                    </S.ButtonWrapper>
                </S.PopupWrapper>
            </S.PopupContainer>
        </S.PopupOverlay>
    );
};

export default LogoutPopup;
