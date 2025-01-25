import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import pin from '../../../assets/common/pin.svg';
import * as S from './styled/styled';
import useScrapStore from '../../../store/useScrapStore';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import { useNavigate } from 'react-router-dom';

const ScrapContentPage = () => {
    const { scrapContents, scrapJobs } = useScrapStore();

    const navigate = useNavigate();

    const handleToContent = () => {
        navigate('/recommend/content');
    };

    const handleToJob = () => {
        navigate('/recommend/job');
    };

    return (
        <S.Container>
            <S.ContentContainer>
                <S.TitleWrapper>
                    <S.PinIcon src={pin} alt="pin icon" />
                    <S.TextWrapper>
                        <S.Title>
                            스크랩한 <S.Highlight>콘텐츠</S.Highlight>
                        </S.Title>
                        <UnderlineButton fontSize={'14px'} onClick={handleToContent}>
                            더 많은 콘텐츠 보러 가기&gt;
                        </UnderlineButton>
                    </S.TextWrapper>
                </S.TitleWrapper>
                <S.ScrollArea>
                    {scrapContents.length > 0 ? (
                        scrapContents.map((content) => (
                            <ContentCard
                                key={content.id}
                                id={content.id}
                                contentName={content.contentName}
                                thumbnail={content.thumbnail}
                                onClick={content.onClick}
                            />
                        ))
                    ) : (
                        <S.EmptyMessage>스크랩한 콘텐츠가 없어요!</S.EmptyMessage>
                    )}
                </S.ScrollArea>
            </S.ContentContainer>

            <S.Line />

            <S.JobContainer>
                <S.TitleWrapper>
                    <S.PinIcon src={pin} alt="pin icon" />
                    <S.TextWrapper>
                        <S.Title>
                            스크랩한 <S.Highlight>채용 공고</S.Highlight>
                        </S.Title>
                        <UnderlineButton fontSize={'14px'} onClick={handleToJob}>
                            더 많은 채용 공고 보러 가기&gt;
                        </UnderlineButton>
                    </S.TextWrapper>
                </S.TitleWrapper>
                <S.ScrollArea>
                    {scrapJobs.length > 0 ? (
                        scrapJobs.map((job) => (
                            <JobPostingCard
                                key={job.id}
                                id={job.id}
                                companyName={job.companyName}
                                deadline={job.deadline}
                                contentName={job.contentName}
                                thumbnail={job.thumbnail}
                            />
                        ))
                    ) : (
                        <S.EmptyMessage>스크랩한 채용 공고가 없어요!</S.EmptyMessage>
                    )}
                </S.ScrollArea>
            </S.JobContainer>
        </S.Container>
    );
};

export default ScrapContentPage;
