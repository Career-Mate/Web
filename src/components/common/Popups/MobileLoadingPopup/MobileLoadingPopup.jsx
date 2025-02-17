import React from 'react';
import * as S from './styled/styled';
import loadingIcon from '../../../../assets/loader.svg';
import { useAuthStore } from '../../../../store/authStore';
import cancelButton from '../../../../assets/common/cancel.svg';

const LoadingPopup = ({ type, onCancel }) => {
    const { user } = useAuthStore();

    const text =
        type === 'template'
            ? `${user.name} 메이트님의
            ${user.job} 직무에 맞는 템플릿을 제공해드릴게요!`
            : `${user.name} 메이트님의
            ${user.job} 직무에 맞는 채용 공고를 추천 중이에요!`;

    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.CancelButton onClick={onCancel}>
                        <img src={cancelButton} alt="취소" />
                    </S.CancelButton>
                    <S.TextWrapper>
                        <S.StyledText>{text}</S.StyledText>
                        <S.LoadingWrapper>
                            <S.LoadingText>잠시만 기다려 주세요...</S.LoadingText>
                            <S.LoadingImg src={loadingIcon} />
                        </S.LoadingWrapper>
                    </S.TextWrapper>
                </S.PopupWrapper>
            </S.PopupContainer>
        </S.PopupOverlay>
    );
};

export default LoadingPopup;
