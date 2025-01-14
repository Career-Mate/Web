import * as S from './styled/styled';

const Card = ({ title, url, first, second }) => {
    return (
        <S.CardContainer>
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
        </S.CardContainer>
    );
};

export default Card;
