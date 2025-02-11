import * as S from './styled/styled';

const SquareButton = ({
    width,
    height,
    padding,
    mobileWidth,
    mobileHeight,
    mobileFontSize,
    backgroundColor,
    onClick,
    children,
}) => {
    return (
        <S.StyledButton
            $width={width}
            $height={height}
            $padding={padding}
            $mobileWidth={mobileWidth}
            $mobileHeight={mobileHeight}
            $mobileFontSize={mobileFontSize}
            $backgroundColor={backgroundColor}
            onClick={onClick}
        >
            {children}
        </S.StyledButton>
    );
};
export default SquareButton;
