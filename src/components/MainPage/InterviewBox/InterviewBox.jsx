import * as S from './styled/styled';

const InterviewBox = ({ children, type, url }) => {
    return (
        <S.Container $type={type}>
            <S.TextWrapper $type={type}>
                <S.Text>{children}</S.Text>
            </S.TextWrapper>
            <S.ImgWrapper>
                <img src={url} alt="프로필" />
            </S.ImgWrapper>
        </S.Container>
    );
};

export default InterviewBox;
