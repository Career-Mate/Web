import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useProfilePopup } from '../../../hooks/useProfile';
import ProfilePopup from '../../../components/common/Popups/ProfilePopup/ProfilePopup';
import { useAuthStore } from '../../../store/authStore';
import MobileLoadingPopup from '../../../components/common/Popups/MobileLoadingPopup/MobileLoadingPopup';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';
import searchIcon from '../../../assets/MainPage/search.svg';
import * as S from './styled/styled';
import useContainerStyle from '../../../hooks/useContainerStyle';

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isMobileScreen = useIsMobileScreen(430);
    const containerStyle = useContainerStyle('half');

    return (
        <S.PageContainer>
            <S.SearchIcon>
                <img src={searchIcon} alt="돋보기 아이콘" />
            </S.SearchIcon>

            <InfoContainer
                type="contentOnly"
                width={containerStyle.width}
                height={containerStyle.height}
                top="60px"
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
                        width: containerStyle.button.buttonWidth,
                        height: containerStyle.button.buttonHeight,
                        fontSize: containerStyle.button.buttonFontSize,
                        backgroundColor: 'deepgreen',
                        onClick: () => {
                            handleOpenPopup();
                        },
                    },
                    {
                        text: '콘텐츠 보러가기',
                        width: containerStyle.button.buttonWidth,
                        height: containerStyle.button.buttonHeight,
                        fontSize: containerStyle.button.buttonFontSize,
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
        </S.PageContainer>
    );
};
export default RecommendMainPage;
