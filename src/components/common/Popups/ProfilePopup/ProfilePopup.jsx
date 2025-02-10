import React from 'react';
import * as S from './styled/styled';
import loadingIcon from '../../../../assets/loader.svg';

const ProfilePopup = () => {
    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.TextWrapper>
                        <S.StyledText>{`최적의 서비스를 사용하려면\n 프로필 설정이 필요해요!`}</S.StyledText>
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

export default ProfilePopup;
