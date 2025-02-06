import * as S from './styled/styled';
import pin from '../../../assets/common/pin.svg';
import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import useScrapStore from '../../../store/useScrapStore';
import { getScrapContent } from '../../../apis/Scrap/Content/ContentScrapApi';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import Pagination from '../../../components/common/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ScrapContentPage = () => {
    const itemsPerPage = 6;
    const navigate = useNavigate();
    const { scrapJobs } = useScrapStore();
    const handleToContent = () => navigate('/recommend/content');
    const handleToJob = () => navigate('/recommend/job');

    const [selectedTab, setSelectedTab] = useState('content');
    const [currentPage, setCurrentPage] = useState(1);
    const [scrapContents, setScrapContents] = useState([]);

    const loadScrapContents = async () => {
        try {
            const scrapContentData = await getScrapContent();
            setScrapContents(Array.isArray(scrapContentData) ? scrapContentData : []);
        } catch (error) {
            console.error('스크랩 콘텐츠 가져오기 실패:', error);
        }
    };

    useEffect(() => {
        loadScrapContents();
    }, []);

    // ✅ 스크랩 해제 시 해당 콘텐츠를 즉시 제거
    const handleScrapUpdate = (contentId) => {
        setScrapContents((prev) => prev.filter((content) => content.contentId !== contentId));
    };

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
                    {scrapContents.length > 0 ? (
                        <S.CardWrapper>
                            {scrapContents.map((content) => (
                                <ContentCard
                                    key={content.contentId}
                                    id={content.contentId}
                                    contentName={content.title}
                                    thumbnail={content.photo}
                                    url={content.url}
                                    isScrapped={content.isScraped}
                                    onScrapUpdate={handleScrapUpdate}
                                />
                            ))}
                        </S.CardWrapper>
                    ) : (
                        <S.EmptyMessage>스크랩한 콘텐츠가 없어요!</S.EmptyMessage>
                    )}

                    <S.ButtonContainer>
                        <UnderlineButton fontSize={'14px'} onClick={handleToContent}>
                            더 많은 콘텐츠 보러 가기&gt;
                        </UnderlineButton>
                    </S.ButtonContainer>
                </>
            ) : (
                <>
                    {displayedJobs.length > 0 ? (
                        <S.CardWrapper>
                            {displayedJobs.map((job) => (
                                <JobPostingCard
                                    key={job.id}
                                    id={job.id}
                                    companyName={job.companyName}
                                    deadline={job.deadline}
                                    contentName={job.contentName}
                                    thumbnail={job.thumbnail}
                                />
                            ))}
                        </S.CardWrapper>
                    ) : (
                        <S.EmptyMessage>스크랩한 채용 공고가 없어요!</S.EmptyMessage>
                    )}

                    <S.ButtonContainer>
                        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
