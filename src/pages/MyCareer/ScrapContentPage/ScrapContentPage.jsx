import * as S from './styled/styled';
import pin from '../../../assets/common/pin.svg';
import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import useScrapStore from '../../../store/useScrapStore';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Pagination from '../../../components/common/Pagination/Pagination';

const ScrapContentPage = () => {
    const { scrapContents, scrapJobs } = useScrapStore();
    const navigate = useNavigate();
    const handleToContent = () => navigate('/recommend/content');
    const handleToJob = () => navigate('/recommend/job');
    const [selectedTab, setSelectedTab] = useState('content');

    return (
        <S.Container>
            <S.TitleContainer>
                <S.TitleWrapper isSelected={selectedTab === 'content'} onClick={() => setSelectedTab('content')}>
                    <S.PinIcon isSelected={selectedTab === 'content'} src={pin} alt="pin icon" />
                    <S.Title isSelected={selectedTab === 'content'}>
                        스크랩한 <S.Highlight>콘텐츠</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>

                <S.TitleWrapper isSelected={selectedTab === 'job'} onClick={() => setSelectedTab('job')}>
                    <S.PinIcon isSelected={selectedTab === 'job'} src={pin} alt="pin icon" />
                    <S.Title isSelected={selectedTab === 'job'}>
                        스크랩한 <S.Highlight>채용 공고</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>
            </S.TitleContainer>

            {selectedTab === 'content' ? (
                <>
                    <S.CardWrapper>
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
                    </S.CardWrapper>
                    <S.ButtonContainer>
                        <UnderlineButton fontSize={'14px'} onClick={handleToContent}>
                            더 많은 콘텐츠 보러 가기&gt;
                        </UnderlineButton>
                    </S.ButtonContainer>
                </>
            ) : (
                <>
                    <S.CardWrapper>
                        {scrapJobs.length > 0 ? (
                            <>
                                {scrapJobs.map((job) => (
                                    <JobPostingCard
                                        key={job.id}
                                        id={job.id}
                                        companyName={job.companyName}
                                        deadline={job.deadline}
                                        contentName={job.contentName}
                                        thumbnail={job.thumbnail}
                                    />
                                ))}
                                <Pagination />
                            </>
                        ) : (
                            <S.EmptyMessage>스크랩한 채용 공고가 없어요!</S.EmptyMessage>
                        )}
                    </S.CardWrapper>
                    <S.ButtonContainer>
                        <UnderlineButton fontSize={'14px'} onClick={handleToJob}>
                            더 많은 채용 공고 보러 가기&gt;
                        </UnderlineButton>
                    </S.ButtonContainer>
                </>
            )}
        </S.Container>
    );
};

export default ScrapContentPage;
