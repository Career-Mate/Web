import React from 'react';
import * as S from './styled/styled';
import SquareButton from '../../Button/SquareButton/SquareButton';
import cancelButton from '../../../../assets/common/cancel.svg';

const MobileAccountPopup = ({ type, onCancel, onConfirm }) => {
    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.CancelButton onClick={onCancel}>
                        <img src={cancelButton} alt="취소" />
                    </S.CancelButton>
                    <S.TextWrapper>
                        <S.StyledText>{type}</S.StyledText>
                        <S.Account>
                            {type === '로그아웃' ? '정말 로그아웃 하시겠어요?' : '정말 탈퇴하시겠어요?'}
                        </S.Account>
                    </S.TextWrapper>
                    <S.ButtonWrapper>
                        <SquareButton
                            mobileWidth="72px"
                            mobileHeight="30px"
                            padding="0px"
                            backgroundColor={type === '로그아웃' ? 'green' : 'grey'}
                            onClick={onConfirm}
                            mobileFontSize={'12px'}
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
