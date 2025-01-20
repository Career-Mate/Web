import * as S from './styled/styled';
import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import JobBox from '../../../components/Recommend/JobBox/JobBox';

const RecommendContentPage = ({ user }) => {
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
                    {user.contentNames.map((name, index) => (
                        <ContentCard key={index} contentName={name} />
                    ))}
                </S.CardWrapper>
            </S.BottomContainer>
        </S.Container>
    );
};

export default RecommendContentPage;
