import React from 'react';
import * as S from './styled/styled';
import SquareButton from '../../Button/SquareButton/SquareButton';

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
                        <SquareButton
                            width="95px"
                            height="48px"
                            padding="12px 40x"
                            backgroundColor="grey"
                            onClick={onCancel}
                        >
                            취소
                        </SquareButton>
                        <SquareButton
                            width="95px"
                            height="48px"
                            padding="0px"
                            backgroundColor="green"
                            onClick={onLogout}
                        >
                            로그아웃
                        </SquareButton>
                    </S.ButtonWrapper>
                </S.PopupWrapper>
            </S.PopupContainer>
        </S.PopupOverlay>
    );
};

export default LogoutPopup;
