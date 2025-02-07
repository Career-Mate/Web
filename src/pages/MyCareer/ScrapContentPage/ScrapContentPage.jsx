import * as S from './styled/styled';
import pin from '../../../assets/common/pin.svg';
import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import { getScrapContents } from '../../../apis/Scrap/Content/ContentScrapApi';
import { getScrapJobs } from '../../../apis/Scrap/Job/JobScrapApi';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import Pagination from '../../../components/common/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ScrapContentPage = () => {
    const itemsPerPage = 6;
    const navigate = useNavigate();

    const handleToContent = () => navigate('/recommend/content');
    const handleToJob = () => navigate('/recommend/job');

    const [selectedTab, setSelectedTab] = useState('content');
    const [currentPage, setCurrentPage] = useState(1);
    const [scrapContents, setScrapContents] = useState([]);
    const [scrapJobs, setScrapJobs] = useState([]);

    const totalPages = Math.max(
        1,
        Math.ceil((selectedTab === 'content' ? scrapContents.length : scrapJobs.length) / itemsPerPage),
    );
    const displayedJobs = scrapJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        const loadScrapData = async () => {
            try {
                if (selectedTab === 'content') {
                    const data = await getScrapContents();
                    console.log(data);
                    setScrapContents(Array.isArray(data) ? data : []);
                } else {
                    const data = await getScrapJobs();
                    console.log(data);
                    setScrapJobs(Array.isArray(data) ? data : []);
                }
            } catch (error) {
                console.error('get scrap data error:', error);
                throw error;
            }
        };
        loadScrapData();
    }, [selectedTab]);

    const handleScrapContentUpdate = (contentId) => {
        setScrapContents((prev) => prev.filter((content) => content.contentId !== contentId));
    };
    const handleScrapJobUpdate = (jobId) => {
        setScrapJobs((prev) => prev.filter((job) => job.recruitId !== jobId));
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
                                    isScrapped={content.isScrapped}
                                    onScrapUpdate={handleScrapContentUpdate}
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
                                    key={job.recruitId}
                                    id={job.recruitId}
                                    companyName={job.companyName}
                                    deadline={job.deadLine}
                                    contentName={job.title}
                                    thumbnail={job.thumbnail}
                                    isScrapped={job.isScraped}
                                    onScrapUpdate={handleScrapJobUpdate}
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
