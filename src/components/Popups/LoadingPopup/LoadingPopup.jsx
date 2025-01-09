import React from 'react';
import * as S from './styled/styled';
import loadingIcon from '../../../assets/loader.svg';

const LoadingPopup = ({ text, onCancel }) => {
    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.TextWrapper>
                        <S.StyledText>{text}</S.StyledText>
                        <S.Loading>
                            잠시만 기다려 주세요...
                            <S.Loader src={loadingIcon} />
                        </S.Loading>
                    </S.TextWrapper>
                    <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                </S.PopupWrapper>
            </S.PopupContainer>
        </S.PopupOverlay>
    );
};

export default LoadingPopup;
