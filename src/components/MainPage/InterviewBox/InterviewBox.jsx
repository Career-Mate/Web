import * as S from './styled/styled';

const InterviewBox = ({ children, type, url }) => {
    return (
        <S.InterviewBoxContainer $type={type}>
            <S.ImgWrapper>
                <img src={url} alt="프로필" />
            </S.ImgWrapper>
            <S.TextWrapper $type={type}>
                <S.Text>{children}</S.Text>
            </S.TextWrapper>
        </S.InterviewBoxContainer>
    );
};

export default InterviewBox;
