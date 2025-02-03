import * as S from './styled/styled';
import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchContents } from '../../../apis/Content/ContentApi';

const RecommendContentPage = ({ user }) => {
    const navigate = useNavigate();
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const loadContents = async () => {
            try {
                const data = await fetchContents();
                setContents(data.contents);
            } catch (error) {
                console.error('콘텐츠 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        loadContents();
    }, []);

    return (
        <S.Container>
            <S.TopContainer>
                <S.Title>추천 콘텐츠</S.Title>
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
                    {contents.map((content) => (
                        <ContentCard
                            key={content.id}
                            id={content.id}
                            contentName={content.contentName}
                            thumbnail={content.thumbnail}
                            isScrapped={content.isScrapped}
                        />
                    ))}
                </S.CardWrapper>
                <OvalButton
                    width={'280px'}
                    height={'58px'}
                    padding={'17x 74px'}
                    onClick={() => navigate('/recommend/job')}
                >
                    추천 공고 보러 가기
                </OvalButton>
            </S.BottomContainer>
        </S.Container>
    );
};

export default RecommendContentPage;
