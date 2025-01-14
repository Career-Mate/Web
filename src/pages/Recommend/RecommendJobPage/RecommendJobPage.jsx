import * as S from './styled/styled';
import { useState, useEffect } from 'react';
import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import Pagination from '../../../components/common/Pagination/Pagination';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';

const RecommendJobPage = ({ user }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(user.contents.length / itemsPerPage);

    const divideArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size),
        );
    };

    const groupedContents = divideArray(user.contents, 3);

    useEffect(() => {
        console.log('userData 확인:', user.contents);
    }, [user]);

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
                <S.CardWrapper>
                    <S.TopCardWrapper>
                        {groupedContents[currentPage * 2 - 2]?.map((content, index) => (
                            <JobPostingCard
                                key={index}
                                companyName={content.companyName || '정보 없음'}
                                deadline={content.deadline || '마감일 없음'}
                                contentName={content.contentName || '채용 정보 없음'}
                            />
                        ))}
                    </S.TopCardWrapper>
                    <S.BottomCardWrapper>
                        {groupedContents[currentPage * 2 - 1]?.map((content, index) => (
                            <JobPostingCard
                                key={index}
                                companyName={content.companyName || '정보 없음'}
                                deadline={content.deadline || '마감일 없음'}
                                contentName={content.contentName || '채용 정보 없음'}
                            />
                        ))}
                    </S.BottomCardWrapper>
                </S.CardWrapper>
                <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <OvalButton
                    width={'280px'}
                    height={'58px'}
                    padding={'17px 74px'}
                    backgroundColor={'#FFFFFF'}
                    onClick={console.log('콘텐츠 보러 가기')}
                >
                    {'콘텐츠 보러 가기'}
                </OvalButton>
            </S.BottomContainer>
        </S.Container>
    );
};

export default RecommendJobPage;
