import * as S from './styled/styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import Pagination from '../../../components/common/Pagination/Pagination';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';
import DeadlineButton from '../../../components/common/Button/DeadlineButton/DeadlineButton';

const RecommendJobPage = ({ user }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const navigate = useNavigate();

    const [sortType, setSortType] = useState('전체');

    const initialScrapStatus = user.contents.map(() => false);
    const [scrapStatus, setScrapStatus] = useState(initialScrapStatus);

    const getDeadlineValue = (deadline) => {
        if (deadline === 'D-DAY') return 0;
        if (deadline.startsWith('D-')) return parseInt(deadline.split('-')[1], 10);
    };

    const getSortedContents = () => {
        if (sortType === '마감 빠른 순') {
            return [...user.contents].sort((a, b) => getDeadlineValue(a.deadline) - getDeadlineValue(b.deadline));
        }
        if (sortType === '마감 늦은 순') {
            return [...user.contents].sort((a, b) => getDeadlineValue(b.deadline) - getDeadlineValue(a.deadline));
        }
        return user.contents;
    };

    const sortedContents = getSortedContents();
    const totalPages = Math.ceil(sortedContents.length / itemsPerPage);
    const currentContents = sortedContents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const toggleScrap = (index) => {
        setScrapStatus((prev) => prev.map((status, i) => (i === index ? !status : status)));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <S.Container>
            <S.TopContainer>
                <S.Title>추천 공고</S.Title>
                <S.TextWrapper>
                    <S.Text>
                        <S.Highlight>{user.name} 메이트님</S.Highlight> 의 커리어와 관련한 콘텐츠에요!
                    </S.Text>
                    <S.Text> 오른쪽 하단 스크랩 버튼을 클릭하면 나의 커리어에 저장돼요. </S.Text>
                </S.TextWrapper>
            </S.TopContainer>
            <S.BottomContainer>
                <JobBox job={user.job} />
                <S.DeadlineWrapper>
                    <DeadlineButton isSelected={sortType === '전체'} onClick={() => setSortType('전체')}>
                        전체
                    </DeadlineButton>
                    <DeadlineButton
                        isSelected={sortType === '마감 빠른 순'}
                        onClick={() => setSortType('마감 빠른 순')}
                    >
                        마감 빠른 순
                    </DeadlineButton>
                    <DeadlineButton
                        isSelected={sortType === '마감 늦은 순'}
                        onClick={() => setSortType('마감 늦은 순')}
                    >
                        마감 늦은 순
                    </DeadlineButton>
                </S.DeadlineWrapper>

                <S.CardWrapper>
                    {currentContents.map((content, index) => (
                        <JobPostingCard
                            key={index}
                            id={(currentPage - 1) * itemsPerPage + index}
                            companyName={content.companyName || '정보 없음'}
                            deadline={content.deadline}
                            contentName={content.contentName || '채용 정보 없음'}
                            isScraped={scrapStatus[(currentPage - 1) * itemsPerPage + index]}
                            onScrapToggle={() => toggleScrap((currentPage - 1) * itemsPerPage + index)}
                            onClick={() => navigate('/recommend/detail')}
                        />
                    ))}
                </S.CardWrapper>
                <S.ActionWrapper>
                    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <OvalButton
                        width={'280px'}
                        height={'58px'}
                        padding={'17px 74px'}
                        backgroundColor={'#FFFFFF'}
                        onClick={() => navigate('/recommend/content')}
                    >
                        {'콘텐츠 보러 가기'}
                    </OvalButton>
                </S.ActionWrapper>
            </S.BottomContainer>
        </S.Container>
    );
};

export default RecommendJobPage;
