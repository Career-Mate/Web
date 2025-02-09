import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useProfilePopup } from '../../../hooks/useProfile';
import ProfilePopup from '../../../components/common/Popups/ProfilePopup/ProfilePopup';

const RecommendMainPage = () => {
    const userName = '김단아';
    const interestJob = '프론트엔드';

    const navigate = useNavigate();
    const { showProfilePopup } = useProfilePopup();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const timeoutId = useRef(null);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        timeoutId.current = setTimeout(() => {
            handleClosePopup();
            navigate('/recommend/job');
        }, 1500);
    };

    const handleClosePopup = () => {
        clearTimeout(timeoutId.current);
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
                            handleOpenPopup();
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
            {isPopupOpen && (
                <LoadingPopup
                    userName={userName}
                    interestJob={interestJob}
                    type="jobOpening"
                    onCancel={handleClosePopup}
                />
            )}
            {showProfilePopup && <ProfilePopup />}
        </>
    );
};

export default RecommendMainPage;
