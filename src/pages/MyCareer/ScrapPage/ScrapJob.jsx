import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import { useGetScrapJobs } from '../../../apis/Scrap/Job/JobScrapApi';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import Pagination from '../../../components/common/Pagination/Pagination';
import * as S from './styled/styled';
import { useAuthStore } from '../../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ScrapJob = ({ onNavigate }) => {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    const { data: scrapJobs, isLoading, isError } = useGetScrapJobs();
    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);
    const [filteredJobs, setFilteredJobs] = useState([]);

    // scrapJobs가 undefined일 수 있으므로 기본값([])을 설정하여 안정성 확보
    useEffect(() => {
        setFilteredJobs((scrapJobs || []).filter((job) => job.jobName === user.job));
    }, [scrapJobs, user.job]);

    const totalPages = Math.max(1, Math.ceil(filteredJobs.length / itemsPerPage));
    const displayedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // 렌더링 도중 훅이 변경되는 문제를 방지하기 위해 useEffect 사용
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(Math.max(1, totalPages));
        }
    }, [totalPages]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error</div>;

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
                                    state: { page: currentPage },
                                })
                            }
                            isScrapped={job.isScraped}
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
