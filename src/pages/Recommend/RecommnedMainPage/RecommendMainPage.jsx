import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState, useRef } from 'react';
import { useProfilePopup } from '../../../hooks/useProfile';
import ProfilePopup from '../../../components/common/Popups/ProfilePopup/ProfilePopup';
import { useAuthStore } from '../../../store/authStore';
import MobileLoadingPopup from '../../../components/common/Popups/MobileLoadingPopup/MobileLoadingPopup';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const RecommendMainPage = () => {
    const user = useAuthStore();

    const navigate = useNavigate();
    const { showProfilePopup } = useProfilePopup();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const timeoutId = useRef(null);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        timeoutId.current = setTimeout(() => {
            handleClosePopup();
            navigate('/recommend/job');
        }, 1000);
    };

    const handleClosePopup = () => {
        clearTimeout(timeoutId.current);
        setIsPopupOpen(false);
    };

    const isMobileScreen = useIsMobileScreen(430);
    const isTabletScreen = useIsMobileScreen(1024);

    const containerStyle = useMemo(() => {
        if (isMobileScreen) {
            return {
                width: '280px',
                height: '300px',
                mainFontSize: '18px',
                detailFontSize: '10px',
                buttonWidth: '213px',
                buttonHeight: '39px',
                buttonFontSize: '14px',
            };
        } else if (isTabletScreen) {
            return {
                width: '574px',
                height: '411px',
                mainFontSize: '30px',
                detailFontSize: '18px',
                buttonWidth: '226px',
                buttonHeight: '46px',
                buttonFontSize: '18px',
            };
        } else {
            return {
                width: '768px',
                height: '486px',
                mainFontSize: '36px',
                detailFontSize: '20px',
                buttonWidth: '327px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            };
        }
    }, [isMobileScreen, isTabletScreen]);

    console.log('Button Width:', containerStyle.buttonWidth);
    console.log('Button Height:', containerStyle.buttonHeight);
    console.log('Button Font Size:', containerStyle.buttonFontSize);

    return (
        <>
            <InfoContainer
                type="contentOnly"
                width={containerStyle.width}
                height={containerStyle.height}
                top="271px"
                showLogo={false}
                showTitleText={false}
                mainText={`${user.user.name} 메이트님에게`}
                detailText={`관련 직무에 맞는 공고를 추천하기 위해
                    아래 '추천 공고 불러오기'를 클릭해주세요.
                    
                    지원하기 전 직무 관련 콘텐츠를 보고 싶다면
                    아래 '콘텐츠 보러가기'를 클릭해주세요.`}
                mainFontSize={containerStyle.mainFontSize}
                detailFontSize={containerStyle.detailFontSize}
                buttons={[
                    {
                        text: '추천 공고 불러오기',
                        width: containerStyle.buttonWidth,
                        height: containerStyle.buttonHeight,
                        fontSize: containerStyle.buttonFontSize,
                        backgroundColor: 'deepgreen',
                        onClick: () => {
                            handleOpenPopup();
                        },
                    },
                    {
                        text: '콘텐츠 보러가기',
                        width: containerStyle.buttonWidth,
                        height: containerStyle.buttonHeight,
                        fontSize: containerStyle.buttonFontSize,
                        backgroundColor: 'green',
                        onClick: () => {
                            navigate('/recommend/content');
                        },
                    },
                ]}
            />
            {isPopupOpen &&
                (isMobileScreen ? (
                    <MobileLoadingPopup
                        userName={user.name}
                        interestJob={user.job}
                        type="jobOpening"
                        onCancel={handleClosePopup}
                    />
                ) : (
                    <LoadingPopup
                        userName={user.name}
                        interestJob={user.job}
                        type="jobOpening"
                        onCancel={handleClosePopup}
                    />
                ))}

            {showProfilePopup && <ProfilePopup />}
        </>
    );
};
export default RecommendMainPage;
