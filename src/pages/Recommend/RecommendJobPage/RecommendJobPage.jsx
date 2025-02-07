import * as S from './styled/styled';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import Pagination from '../../../components/common/Pagination/Pagination';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';
import DeadlineButton from '../../../components/common/Button/DeadlineButton/DeadlineButton';
import { useFetchRecommendJobs } from '../../../apis/Job/useJobApi';

const SORT_TYPES = {
    전체: 'POSTING_DESC',
    '마감 빠른 순': 'DEADLINE_ASC',
    '마감 늦은 순': 'DEADLINE_DESC',
};

const RecommendJobPage = ({ user }) => {
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
    const [sortType, setSortType] = useState('전체');

    const navigate = useNavigate();
    const { data } = useFetchRecommendJobs(currentPage, SORT_TYPES[sortType]);

    const jobName = data?.jobName || '직무 정보 없음';
    const [jobs, setJobs] = useState([]);
    const totalPages = data?.totalPages || 1;

    useEffect(() => {
        if (data?.jobs) {
            setJobs(data.jobs);
        }
    }, [data]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handleScrapUpdate = (jobId, isScraped) => {
        setJobs((prevJobs) => prevJobs.map((job) => (job.id === jobId ? { ...job, isScraped } : job)));
    };

    return (
        <S.Container>
            <S.TopContainer>
                <S.Title>추천 공고</S.Title>
                <S.TextWrapper>
                    <S.Text>
                        <S.Highlight>{user.name} 메이트님</S.Highlight>의 커리어와 관련한 공고에요!
                    </S.Text>
                    <S.Text>오른쪽 하단 스크랩 버튼을 클릭하면 나의 커리어에 저장돼요.</S.Text>
                </S.TextWrapper>
            </S.TopContainer>
            <S.BottomContainer>
                <JobBox job={jobName} />
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

                <S.CardWrapper>
                    {jobs.map((job) => (
                        <JobPostingCard
                            key={job.id}
                            id={job.id}
                            companyName={job.companyName}
                            deadline={job.deadline}
                            contentName={job.contentName}
                            jobType={jobName}
                            onClick={() => navigate(`/recommend/detail/${job.id}`, { state: { page: currentPage } })}
                            isScrapped={job.isScraped}
                            onScrapUpdate={handleScrapUpdate}
                        />
                    ))}
                </S.CardWrapper>
                <S.ActionWrapper>
                    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <OvalButton
                        width="280px"
                        height="58px"
                        padding="17px 74px"
                        backgroundColor="#FFFFFF"
                        onClick={() => navigate('/recommend/content')}
                    >
                        콘텐츠 보러 가기
                    </OvalButton>
                </S.ActionWrapper>
            </S.BottomContainer>
        </S.Container>
    );
};

export default RecommendJobPage;
