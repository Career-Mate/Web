import * as S from './styled/styled';
import pin from '../../../assets/common/pin.svg';
import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import useScrapStore from '../../../store/useScrapStore';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import Pagination from '../../../components/common/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getScrapContent } from '../../../apis/Scrap/Content/ContentScrapApi';

const ScrapContentPage = () => {
    const itemsPerPage = 6;

    const { scrapJobs } = useScrapStore();
    const navigate = useNavigate();

    const handleToContent = () => navigate('/recommend/content');
    const handleToJob = () => navigate('/recommend/job');

    const [selectedTab, setSelectedTab] = useState('content');
    const [currentPage, setCurrentPage] = useState(1);
    const [scrapContents, setScrapContents] = useState([]);

    const loadScrapContents = async () => {
        try {
            const scrapContentData = await getScrapContent();
            setScrapContents(data);
            console.log('scrap contents data:', scrapContentData);
        } catch (error) {
            console.error('scrap content data error:', error);
        }
    };

    useEffect(() => {
        if (selectedTab === 'job') {
            const totalItems = scrapJobs.length;
            const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

            if (totalItems === 0) {
                setCurrentPage(1);
            } else if (currentPage > totalPages) {
                setCurrentPage((prev) => Math.max(1, prev - 1));
            }
        }

        window.scrollTo(0, 0);
    }, [scrapJobs, selectedTab, currentPage]);

    const getPaginatedData = (data) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const displayedData = selectedTab === 'content' ? getPaginatedData(scrapContents) : getPaginatedData(scrapJobs);
    const totalPages = Math.max(
        1,
        Math.ceil((selectedTab === 'content' ? scrapContents.length : scrapJobs.length) / itemsPerPage),
    );

    return (
        <S.Container>
            <S.TitleContainer>
                <S.TitleWrapper
                    isSelected={selectedTab === 'content'}
                    onClick={() => {
                        setSelectedTab('content');
                        setCurrentPage(1);
                    }}
                >
                    <S.PinIcon isSelected={selectedTab === 'content'} src={pin} alt="pin icon" />
                    <S.Title isSelected={selectedTab === 'content'}>
                        스크랩한 <S.Highlight>콘텐츠</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>

                <S.TitleWrapper
                    isSelected={selectedTab === 'job'}
                    onClick={() => {
                        setSelectedTab('job');
                        setCurrentPage(1);
                    }}
                >
                    <S.PinIcon isSelected={selectedTab === 'job'} src={pin} alt="pin icon" />
                    <S.Title isSelected={selectedTab === 'job'}>
                        스크랩한 <S.Highlight>채용 공고</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>
            </S.TitleContainer>

            {selectedTab === 'content' ? (
                <>
                    {displayedData.length > 0 ? (
                        <S.CardWrapper>
                            {displayedData.map((content) => (
                                <ContentCard
                                    key={content.id}
                                    id={content.id}
                                    contentName={content.contentName}
                                    thumbnail={content.thumbnail}
                                    onClick={content.onClick}
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
                    {displayedData.length > 0 ? (
                        <S.CardWrapper>
                            {displayedData.map((job) => (
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
