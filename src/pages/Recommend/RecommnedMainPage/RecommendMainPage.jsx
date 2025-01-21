import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RecommendMainPage = () => {
    const userName = '김단아';
    const interestJob = '프론트엔드';

    const navigate = useNavigate();

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
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
                            handleOpenPopup();
                            navigate('/recommend/content');
                        },
                    },
                ]}
            />
            {isPopupOpen && (
                <LoadingPopup
                    userName={userName}
                    interestJob={interestJob}
                    type="jobOpening"
                    onCancel={handleClosePopup}
                />
            )}
        </>
    );
};

export default RecommendMainPage;
