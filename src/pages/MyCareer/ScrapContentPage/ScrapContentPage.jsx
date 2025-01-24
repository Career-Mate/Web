import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import pin from '../../../assets/common/pin.svg';
import * as S from './styled/styled';

const ScrapContentPage = () => {
    return (
        <S.Container>
            <S.ContentContainer>
                <S.TitleWrapper>
                    <S.PinIcon src={pin} alt="pin icon" />
                    <S.Title>
                        스크랩한 <S.Highlight>콘텐츠</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>
                <S.ScrollArea>
                    {[1, 2].map((_, index) => (
                        <ContentCard key={index} />
                    ))}
                </S.ScrollArea>
            </S.ContentContainer>
            <S.Line />
            <S.JobContainer>
                <S.TitleWrapper>
                    <S.PinIcon src={pin} alt="pin icon" />
                    <S.Title>
                        스크랩한 <S.Highlight>채용 공고</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>
                <S.ScrollArea>
                    {[1, 2, 3, 4].map((_, index) => (
                        <JobPostingCard key={index} />
                    ))}
                </S.ScrollArea>
            </S.JobContainer>
            <S.ButtonContainer>
                <SquareButton width="131px" height="60px" onClick={console.log('저장 클릭')}>
                    저장
                </SquareButton>
            </S.ButtonContainer>
        </S.Container>
    );
};

export default ScrapContentPage;
