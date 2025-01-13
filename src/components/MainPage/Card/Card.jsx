import * as S from './styled/styled';

const Card = ({ title, url, first, second }) => {
    return (
        <S.Container>
            <S.TitleBox>{title}</S.TitleBox>
            <S.ContentWrapper>
                <S.Img>
                    <img src={url} alt="아이콘"></img>
                </S.Img>
                <S.Content>
                    <S.FirstSection>{first}</S.FirstSection>
                    <S.SecondSection>{second}</S.SecondSection>
                </S.Content>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default Card;
