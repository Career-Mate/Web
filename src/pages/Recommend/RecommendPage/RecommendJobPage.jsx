import * as S from './styled/styled';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import Pagination from '../../../components/common/Pagination/Pagination';
import DeadlineButton from '../../../components/common/Button/DeadlineButton/DeadlineButton';
import JobPostingCardSkeleton from '../../../components/SkeletonUi/JobPostingCardSkeleton/JobPostingCardSkeleton';
import { useGetRecommendJobs } from '../../../apis/Job/JobApi';
import { useQueryClient } from '@tanstack/react-query';

const SORT_TYPES = {
    '마감 빠른 순': 'DEADLINE_ASC',
    전체: 'POSTING_DESC',
    '마감 늦은 순': 'DEADLINE_DESC',
};

const RecommendJobPage = ({ user }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
    const [sortType, setSortType] = useState(location.state?.sortType || '전체');

    const { data, isLoading, error } = useGetRecommendJobs(currentPage, SORT_TYPES[sortType]);
    const jobs = data?.jobs || [];
    const totalPages = data?.totalPages || 1;
    const jobName = data?.jobName || '직무 정보 없음';

    const handleScrapUpdate = (jobId, isScrapped) => {
        queryClient.setQueryData(['recommendJobs', currentPage, SORT_TYPES[sortType]], (oldData) => {
            if (!oldData) return oldData;
            return {
                ...oldData,
                jobs: oldData.jobs.map((job) => (job.id === jobId ? { ...job, isScrapped } : job)),
            };
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, sortType]);

    const renderJobPostingCards = () =>
        jobs.length > 0 ? (
            <S.CardWrapper>
                {jobs.map((job) => (
                    <JobPostingCard
                        key={job.id}
                        id={job.id}
                        companyName={job.companyName}
                        deadline={job.deadline}
                        contentName={job.contentName}
                        jobType={user.job}
                        goToDetail={() =>
                            navigate(`/recommend/detail/${job.id}`, {
                                state: { page: currentPage, sortType: sortType, from: 'recommend' },
                            })
                        }
                        isScrapped={job.isScrapped}
                        onScrapUpdate={handleScrapUpdate}
                    />
                ))}
            </S.CardWrapper>
        ) : (
            <div style={{ textAlign: 'center', fontSize: '18px', margin: '20px 0' }}>공고가 없습니다.</div>
        );

    const numbers = Array.from({ length: 6 }, (_, i) => i + 1);
    const renderCardLoading = () => (
        <S.CardWrapper>
            {numbers.map((number) => (
                <JobPostingCardSkeleton key={number} />
            ))}
        </S.CardWrapper>
    );

    if (error) return <div>error</div>;

    return (
        <S.Container>
            <JobBox job={jobName} />
            <S.TextWrapper>
                <S.Text>
                    <S.Highlight>{user.name} 메이트님</S.Highlight>의 커리어와 관련한 공고에요!
                </S.Text>
                <S.Text>오른쪽 하단 스크랩 버튼을 클릭하면 나의 커리어에 저장돼요.</S.Text>
            </S.TextWrapper>
            <S.DeadlineWrapper>
                {Object.keys(SORT_TYPES).map((type) => (
                    <DeadlineButton
                        key={type}
                        isSelected={sortType === type}
                        onClick={() => {
                            setCurrentPage(1);
                            setSortType(type);
                        }}
                    >
                        {type}
                    </DeadlineButton>
                ))}
            </S.DeadlineWrapper>

            {isLoading ? renderCardLoading() : renderJobPostingCards()}

            <S.ButtonContainer>
                <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </S.ButtonContainer>
        </S.Container>
    );
};

export default RecommendJobPage;
