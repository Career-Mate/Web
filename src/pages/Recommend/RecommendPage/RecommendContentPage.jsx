import * as S from './styled/styled';
import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';
import ContentCardSkeleton from '../../../components/SkeletonUi/ContentCardSkeleton/ContentCardSkeleton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetRecommendContents } from '../../../apis/Content/ContentApi';

const RecommendContentPage = ({ user }) => {
    const navigate = useNavigate();

    const numbers = Array.from({ length: 3 }, (_, i) => i + 1);

    const { data, isLoading, error } = useGetRecommendContents();
    const contents = data?.contents || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (error) return <div>error</div>;

    return (
        <S.Container>
            <JobBox job={user.job} />
            <S.TextWrapper>
                <S.Text>
                    <S.Highlight>{user.name} 메이트님</S.Highlight> 의 커리어와 관련한 콘텐츠에요!
                </S.Text>
                <S.Text> 오른쪽 하단 스크랩 버튼을 클릭하면 나의 커리어에 저장돼요. </S.Text>
            </S.TextWrapper>
            <S.CardWrapper>
                {isLoading
                    ? numbers.map((number) => <ContentCardSkeleton />)
                    : contents.map((content) => (
                          <ContentCard
                              key={content.id}
                              id={content.id}
                              contentName={content.contentName}
                              thumbnail={content.thumbnail}
                              url={content.url}
                              isScrapped={content.isScrapped}
                          />
                      ))}
            </S.CardWrapper>
        </S.Container>
    );
};

export default RecommendContentPage;
