import React from 'react';
import * as S from './styled/styled';
import loadingIcon from '../../../../assets/common/loader.svg';
import SquareButton from '../../Button/SquareButton/SquareButton';

const LoadingPopup = ({ userName, type, onCancel }) => {
    const text =
        type === 'template'
            ? `${userName} 메이트님의 <br /> 관심 직무에 맞는 템플릿을 제공해드릴게요!`
            : `${userName} 메이트님의 <br /> 관심 직무에 맞는 채용 공고를 추천 중이에요!`;

    return (
        <S.PopupOverlay>
            <S.PopupContainer>
                <S.PopupWrapper>
                    <S.TextWrapper>
                        {/* dangerouslySetInnerHTML을 사용하여 <br /> 태그를 적용 */}
                        <S.StyledText dangerouslySetInnerHTML={{ __html: text }} />
                        <S.LoadingWrapper>
                            <S.LoadingText>잠시만 기다려 주세요...</S.LoadingText>
                            <S.LoadingImg src={loadingIcon} />
                        </S.LoadingWrapper>
                    </S.TextWrapper>
                    <SquareButton width="95px" height="48px" padding="0px" backgroundColor="grey" onClick={onCancel}>
                        취소
                    </SquareButton>
                </S.PopupWrapper>
            </S.PopupContainer>
        </S.PopupOverlay>
    );
};

export default LoadingPopup;
