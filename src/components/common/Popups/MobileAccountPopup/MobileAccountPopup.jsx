import React from 'react';
import * as S from './styled/styled';
import SquareButton from '../../Button/SquareButton/SquareButton';

const MobileAccountPopup = ({ type, onCancel, onConfirm }) => {
    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.TextWrapper>
                        <S.StyledText>{type}</S.StyledText>
                        <S.Account>
                            {type === '로그아웃' ? '정말 로그아웃 하시겠어요?' : '정말 탈퇴하시겠어요?'}
                        </S.Account>
                    </S.TextWrapper>
                    <S.ButtonWrapper>
                        <SquareButton
                            width="95px"
                            height="48px"
                            padding="0px"
                            backgroundColor={type === '로그아웃' ? 'grey' : 'green'}
                            onClick={onCancel}
                        >
                            취소
                        </SquareButton>
                        <SquareButton
                            width="130px"
                            height="48px"
                            padding="0px"
                            backgroundColor={type === '로그아웃' ? 'green' : 'grey'}
                            onClick={onConfirm}
                        >
                            {type}
                        </SquareButton>
                    </S.ButtonWrapper>
                </S.PopupWrapper>
            </S.PopupContainer>
        </S.PopupOverlay>
    );
};

export default MobileAccountPopup;
