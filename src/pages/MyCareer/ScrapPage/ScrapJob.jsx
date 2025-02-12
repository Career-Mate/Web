import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import { useGetScrapJobs } from '../../../apis/Scrap/Job/JobScrapApi';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import Pagination from '../../../components/common/Pagination/Pagination/Pagination';
import * as S from './styled/styled';
import { useAuthStore } from '../../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ScrapJob = ({ onNavigate, prevPage }) => {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    const { data: scrapJobs, isLoading, isError } = useGetScrapJobs();
    const itemsPerPage = 6;

    const [filteredJobs, setFilteredJobs] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(prevPage ?? 1);

    useEffect(() => {
        if (prevPage) {
            setCurrentPage(prevPage);
        }
    }, [prevPage]);

    useEffect(() => {
        if (!isLoading && scrapJobs && Array.isArray(scrapJobs.recruitScrapThumbNailInfoDTOList)) {
            if (scrapJobs.jobName === user.job) {
                setFilteredJobs(scrapJobs.recruitScrapThumbNailInfoDTOList);
            } else {
                setFilteredJobs([]);
            }
        } else {
            setFilteredJobs([]);
        }
    }, [scrapJobs, user.job, isLoading]);

    useEffect(() => {
        const newTotalPages = Math.max(1, Math.ceil(filteredJobs.length / itemsPerPage));
        setTotalPages(newTotalPages);
    }, [filteredJobs]);

    useEffect(() => {
        if (totalPages > 1 && currentPage > totalPages) {
            setCurrentPage(Math.max(1, totalPages));
        }
    }, [totalPages]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error</div>;

    const displayedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                            jobType={user.job}
                            goToDetail={() =>
                                navigate(`/recommend/detail/${job.recruitId}`, {
                                    state: { page: currentPage, from: 'scrap' },
                                })
                            }
                            isScrapped={job.isScrapped}
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
