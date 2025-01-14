import React from 'react';
import * as S from './styled/styled';
import SquareButton from '../Button/SquareButton/SquareButton';
import Logo from '../../../assets/common/logo.svg';

const InfoContainer = ({
    type,
    width,
    height,
    top,
    showLogo = false,
    showTitleText = false,
    mainText,
    detailText,
    buttons = [],
}) => {
    return (
        <S.InfoContainer $width={width} $height={height} $top={top}>
            {showLogo && <S.Logo src={Logo} alt="Logo" $top={top} />}
            {showTitleText && <S.TitleText $top={top}>프로필 불러오기</S.TitleText>}

            <S.ContentWrapper>
                {mainText && <S.MainText>{mainText}</S.MainText>}
                {detailText && <S.DetailText dangerouslySetInnerHTML={{ __html: detailText }} />}

                {buttons.length > 0 && (
                    <S.ButtonWrapper>
                        {buttons.map(({ text, width, height, backgroundColor, padding, onClick }, index) => (
                            <SquareButton
                                key={index}
                                width={width}
                                height={height}
                                backgroundColor={backgroundColor}
                                padding={padding}
                                onClick={onClick}
                            >
                                {text}
                            </SquareButton>
                        ))}
                    </S.ButtonWrapper>
                )}
            </S.ContentWrapper>
        </S.InfoContainer>
    );
};

export default InfoContainer;
