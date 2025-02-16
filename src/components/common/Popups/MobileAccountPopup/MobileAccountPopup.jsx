import React from 'react';
import * as S from './styled/styled';
import SquareButton from '../../Button/SquareButton/SquareButton';
import closeButton from '../../../../assets/close.svg';

const MobileAccountPopup = ({ type, onCancel, onConfirm }) => {
    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.CloseButton onClick={onCancel}>
                        <img src={closeButton} alt="취소" />
                    </S.CloseButton>
                    <S.TextWrapper>
                        <S.StyledText>{type}</S.StyledText>
                        <S.Account>
                            {type === '로그아웃'
                                ? '정말 로그아웃 하시겠어요?'
                                : type === '저장 완료'
                                  ? '저장이 완료되었습니다!'
                                  : '정말 탈퇴하시겠어요?'}
                        </S.Account>
                    </S.TextWrapper>
                    <S.ButtonWrapper>
                        <SquareButton
                            mobileWidth="72px"
                            mobileHeight="30px"
                            padding="0px"
                            backgroundColor={type === '회원 탈퇴' ? 'grey' : 'green'}
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
