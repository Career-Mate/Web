import * as S from './styled/styled';

const UnderlineButton = ({ fontSize, onClick, children, color }) => {
    return (
        <S.StyledButton $fontSize={fontSize} onClick={onClick} color={color}>
            <span>{children}</span>
        </S.StyledButton>
    );
};

export default UnderlineButton;
