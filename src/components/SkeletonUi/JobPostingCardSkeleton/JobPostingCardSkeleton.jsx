import * as S from './styled/styled';
import scrapUncheckedIcon from '../../../assets/common/scrap-uncheck.svg';

const JobPostingCardSkeleton = () => {
    return (
        <S.CardContainer>
            <S.CompanyNameWrapper>
                <S.CompanyName />
            </S.CompanyNameWrapper>
            <S.Thumbnail />
            <S.Line />
            <S.ContentWrapper>
                <S.Title />
                <S.DeadlineWrapper>
                    <S.Deadline />
                    <S.ScrapIcon src={scrapUncheckedIcon} />
                </S.DeadlineWrapper>
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default JobPostingCardSkeleton;
