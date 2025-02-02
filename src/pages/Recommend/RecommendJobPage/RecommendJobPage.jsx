import * as S from './styled/styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import Pagination from '../../../components/common/Pagination/Pagination';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';
import DeadlineButton from '../../../components/common/Button/DeadlineButton/DeadlineButton';
import { useFetchRecruits } from '../../../apis/useFetchRecruits';

const RecommendJobPage = ({ user }) => {

    const apiSortType = ["POSTING_DESC","DEADLINE_ASC","DEADLINE_DESC"];
    const [sortType, setSortType] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const {data: recruits, error, isError, isSuccess} = useFetchRecruits(currentPage,itemsPerPage, apiSortType[sortType]);

    const recruitsResult = recruits?.data?.result;
    
    const navigate = useNavigate();


    // const totalPages = Math.ceil(sortedContents.length / itemsPerPage);
    const totalPages = 2;
    const SortPageHandler = (sortType)=>{
        setSortType(sortType);
        setCurrentPage(1);
    } 

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
                    <DeadlineButton isSelected={sortType === 0} onClick={() => SortPageHandler(0)}>
                        전체
                    </DeadlineButton>
                    <DeadlineButton
                        isSelected={sortType === 1}
                        onClick={() => SortPageHandler(1)}
                    >
                        마감 빠른 순
                    </DeadlineButton>
                    <DeadlineButton
                        isSelected={sortType === 2}
                        onClick={() => SortPageHandler(2)}
                    >
                        마감 늦은 순
                    </DeadlineButton>
                </S.DeadlineWrapper>

                <S.CardWrapper>
                    {recruitsResult?.map((content, index) => (
                        <JobPostingCard
                            key={content.recruitId}
                            id={content.recruitId}
                            companyName={content.companyName || '정보 없음'}
                            deadline={content.deadLine}
                            contentName={content.title || '채용 정보 없음'}
                            onClick={() => navigate(`/recommend/detail/${content.recruitId}`)}
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
