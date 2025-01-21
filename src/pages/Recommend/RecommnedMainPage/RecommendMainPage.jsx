import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import { useNavigate } from 'react-router-dom';

const RecommendMainPage = () => {
    const userName = '김단아';
    const navigate = useNavigate();

    return (
        <InfoContainer
            type="contentOnly"
            width="768px"
            height="486px"
            top="271px"
            showLogo={false}
            showTitleText={false}
            mainText={`${userName} 메이트님에게`}
            detailText={`적합한 공고 추천을 위해
                    커리어 정리 템플릿 분석이 필요해요!
                    아래 '추천 공고 불러오기'를 클릭해주세요.
                    
                    지원하기 전 직무 관련 콘텐츠를 보고 싶다면
                    아래 '콘텐츠 보러가기'를 클릭해주세요.`}
            buttons={[
                {
                    text: '추천 공고 불러오기',
                    width: '327px',
                    height: '60px',
                    backgroundColor: 'deepgreen',
                    onClick: () => {
                        navigate('/recommend/job');
                    },
                },
                {
                    text: '콘텐츠 보러가기',
                    width: '327px',
                    height: '60px',
                    backgroundColor: 'green',
                    onClick: () => {
                        navigate('/recommend/content');
                    },
                },
            ]}
        />
    );
};

export default RecommendMainPage;
