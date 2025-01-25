import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import pin from '../../../assets/common/pin.svg';
import * as S from './styled/styled';
import useScrapStore from '../../../store/useScrapStore';

const ScrapContentPage = () => {
    const { scrapContents, scrapJobs } = useScrapStore();

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
                    {scrapContents.map((content) => (
                        <ContentCard
                            key={content.id}
                            id={content.id}
                            contentName={content.contentName}
                            thumbnail={content.thumbnail}
                            onClick={content.onClick}
                        />
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
                    {scrapJobs.map((job) => (
                        <JobPostingCard
                            key={job.id}
                            id={job.id}
                            companyName={job.companyName}
                            deadline={job.deadline}
                            contentName={job.contentName}
                            thumnail={job.thumbnail}
                        />
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
