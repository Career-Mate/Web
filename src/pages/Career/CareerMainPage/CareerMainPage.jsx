import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../../assets/MainPage/search.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import * as S from './styled/styled';
import ProfilePopup from '../../../components/common/Popups/ProfilePopup/ProfilePopup';
import { useProfilePopup } from '../../../hooks/useProfile';
import { useAuthStore } from '../../../store/authStore';
import MobileLoadingPopupt from '../../../components/common/Popups/MobileLoadingPopup/MobileLoadingPopup';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const CareerMainPage = () => {
    const navigate = useNavigate();
    const user = useAuthStore();

    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const timeoutId = useRef(null);
    const { showProfilePopup } = useProfilePopup();

    const handleButtonClick = () => {
        setIsPopUpVisible(true);
        timeoutId.current = setTimeout(() => {
            handlePopUpCancel();
            navigate('/career/note');
        }, 1000);
    };

    const handlePopUpCancel = () => {
        clearTimeout(timeoutId.current);
        setIsPopUpVisible(false);
    };

    const isMobileScreen = useIsMobileScreen();

    const [containerStyle, setContainerStyle] = useState({
        width: '590px',
        height: '313px',
        mainFontSize: '24px',
        detailFontSize: '16px',
        buttonWidth: '375px',
        buttonHeight: '60px',
        buttonFontSize: '18px',
    });

    useEffect(() => {
        const handleResize = () => {
            let newStyle;
            if (window.innerWidth <= 390) {
                newStyle = {
                    width: '260px',
                    height: '221px',
                    mainFontSize: '18px',
                    detailFontSize: '10px',
                    buttonWidth: '213px',
                    buttonHeight: '39px',
                    buttonFontSize: '14px',
                };
            } else if (window.innerWidth <= 1024) {
                newStyle = {
                    width: '556px',
                    height: '405px',
                    mainFontSize: '30px',
                    detailFontSize: '18px',
                    buttonWidth: '375px',
                    buttonHeight: '60px',
                    buttonFontSize: '20px',
                };
            } else {
                newStyle = {
                    width: '590px',
                    height: '313px',
                    mainFontSize: '24px',
                    detailFontSize: '16px',
                    buttonWidth: '372px',
                    buttonHeight: '57px',
                    buttonFontSize: '18px',
                };
            }

            setContainerStyle(newStyle);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <S.CareerMainPageWrapper>
            <S.SearchIcon>
                <img src={searchIcon} alt="돋보기 아이콘" />
            </S.SearchIcon>

            <InfoContainer
                type="contentOnly"
                width={containerStyle.width}
                height={containerStyle.height}
                top="0px"
                showLogo={false}
                showTitleText={false}
                mainText={`${user.user.name} 메이트님에게`}
                detailText={`관심 직무에 맞는 템플릿을 제공하기 위해 프로필 분석이 필요해요!
                아래 '내 프로필 분석하기'를 클릭해주세요.`}
                $mainFontSize={containerStyle.mainFontSize}
                $detailFontSize={containerStyle.detailFontSize}
                buttons={[
                    {
                        text: '내 프로필 분석하기',
                        width: containerStyle.buttonWidth,
                        height: containerStyle.buttonHeight,
                        fontSize: containerStyle.buttonFontSize,
                        backgroundColor: 'deepgreen',
                        onClick: handleButtonClick,
                    },
                ]}
            />

            {isPopUpVisible &&
                (isMobileScreen ? (
                    <MobileLoadingPopupt
                        userName={user.user.name}
                        interestJob={user.user.job}
                        type="template"
                        onCancel={handlePopUpCancel}
                    />
                ) : (
                    <LoadingPopup
                        userName={user.user.name}
                        interestJob={user.user.job}
                        type="template"
                        onCancel={handlePopUpCancel}
                    />
                ))}

            {showProfilePopup && <ProfilePopup />}
        </S.CareerMainPageWrapper>
    );
};

export default CareerMainPage;
