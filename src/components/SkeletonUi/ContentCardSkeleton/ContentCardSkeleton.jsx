import * as S from './styled/styled.js';
import scrapUncheckedIcon from '../../../assets/common/scrap-uncheck.svg';
const ContentCard = () => {
    return (
        <S.CardContainer>
            <S.Thumbnail />
            <S.Line />
            <S.ContentWrapper>
                <S.TitleWrapper>
                    <S.Title $width={'230px'} />
                    <S.Title $width={'100px'} />
                </S.TitleWrapper>
                <S.DeadlineWrapper>
                    <S.ScrapIcon src={scrapUncheckedIcon} />
                </S.DeadlineWrapper>
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default ContentCard;
