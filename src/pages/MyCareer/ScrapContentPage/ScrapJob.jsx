import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import { getScrapJobs } from '../../../apis/Scrap/Job/JobScrapApi';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import Pagination from '../../../components/common/Pagination/Pagination';
import * as S from './styled/styled';
import { useState, useEffect } from 'react';

const ScrapJob = ({ onNavigate }) => {
    const itemsPerPage = 6;
    const [scrapJobs, setScrapJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadScrapData = async () => {
            try {
                const data = await getScrapJobs();
                setScrapJobs(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('get scrap data error:', error);
            }
        };
        loadScrapData();
    }, []);

    const totalPages = Math.max(1, Math.ceil(scrapJobs.length / itemsPerPage));

    const displayedJobs = scrapJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleScrapJobUpdate = (jobId) => {
        setScrapJobs((prev) => {
            const updatedJobs = prev.filter((job) => job.recruitId !== jobId);
            const newTotalPages = Math.max(1, Math.ceil(updatedJobs.length / itemsPerPage));
            if (currentPage > newTotalPages) {
                setCurrentPage(newTotalPages);
            }
            return updatedJobs;
        });
    };

    return (
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
                <UnderlineButton fontSize={'14px'} onClick={onNavigate}>
                    더 많은 채용 공고 보러 가기&gt;
                </UnderlineButton>
            </S.ButtonContainer>
        </>
    );
};

export default ScrapJob;
