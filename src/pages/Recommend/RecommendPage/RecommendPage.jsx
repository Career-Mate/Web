import * as S from './styled/styled';
import RecommendContentPage from './RecommendContentPage';
import RecommendJobPage from './RecommendJobPage';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import { userData as recommendContentData } from '../../../data/recommendContentData';
import recommendJobData from '../../../data/recommendJobData';

const RecommendPage = () => {
    const { user } = useAuthStore();

    const navigate = useNavigate();
    const { tab } = useParams();

    return (
        <S.Container>
            <S.TabWrapper>
                <S.TabButton isActive={tab === 'content'} onClick={() => navigate('/recommend/content')}>
                    추천 콘텐츠
                </S.TabButton>
                <S.TabButton isActive={tab === 'job'} onClick={() => navigate('/recommend/job')}>
                    추천 공고
                </S.TabButton>
            </S.TabWrapper>

            <S.ListContainer>
                {tab === 'content' ? (
                    <RecommendContentPage user={recommendContentData} />
                ) : (
                    <RecommendJobPage user={recommendJobData} />
                )}
            </S.ListContainer>
        </S.Container>
    );
};

export default RecommendPage;
