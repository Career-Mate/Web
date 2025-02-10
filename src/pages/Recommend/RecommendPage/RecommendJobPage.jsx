import * as S from './styled/styled';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import Pagination from '../../../components/common/Pagination/Pagination';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';
import DeadlineButton from '../../../components/common/Button/DeadlineButton/DeadlineButton';
import { getRecommendJobs } from '../../../apis/Job/JobApi';

const SORT_TYPES = {
    '마감 빠른 순': 'DEADLINE_ASC',
    전체: 'POSTING_DESC',
    '마감 늦은 순': 'DEADLINE_DESC',
};

const RecommendJobPage = ({ user }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
    const [sortType, setSortType] = useState('전체');
    const [jobs, setJobs] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [jobName, setJobName] = useState('직무 정보 없음');

    useEffect(() => {
        const getJobs = async () => {
            try {
                const data = await getRecommendJobs(currentPage, SORT_TYPES[sortType]);
                console.log('API 응답 데이터:', data);

                setJobs(data.jobs || []);
                setTotalPages(data.totalPages || 1);
                setJobName(data.jobName || '직무 정보 없음');
            } catch (err) {
                console.error('fetchRecommendJobs error:', err);
            }
        };

        getJobs();
    }, [currentPage, sortType]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const handleScrapUpdate = (jobId, isScraped) => {
        setJobs((prevJobs) => prevJobs.map((job) => (job.id === jobId ? { ...job, isScraped } : job)));
    };

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

            {jobs.length > 0 ? (
                <S.CardWrapper>
                    {jobs.map((job) => (
                        <JobPostingCard
                            key={job.id}
                            id={job.id}
                            companyName={job.companyName}
                            deadline={job.deadline}
                            contentName={job.contentName}
                            jobType={jobName}
                            onClick={() =>
                                navigate(`/recommend/detail/${job.id}`, {
                                    state: { page: currentPage },
                                })
                            }
                            isScrapped={job.isScraped}
                            onScrapUpdate={handleScrapUpdate}
                        />
                    ))}
                </S.CardWrapper>
            ) : (
                <div style={{ textAlign: 'center', fontSize: '18px', margin: '20px 0' }}>공고가 없습니다.</div>
            )}

            <S.ButtonContainer>
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
            </S.ButtonContainer>
        </S.Container>
    );
};

export default RecommendJobPage;
