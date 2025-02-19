import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fileIcon from '../../../assets/MainPage/file.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import * as S from './styled/styled';
import ProfilePopup from '../../../components/common/Popups/ProfilePopup/ProfilePopup';
import { useProfilePopup } from '../../../hooks/useProfile';
import { useAuthStore } from '../../../store/authStore';
import MobileLoadingPopup from '../../../components/common/Popups/MobileLoadingPopup/MobileLoadingPopup';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';
import useContainerStyle from '../../../hooks/useContainerStyle';

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isMobileScreen = useIsMobileScreen(430);
    const containerStyle = useContainerStyle('full');

    return (
        <S.CareerMainPageWrapper>
            <S.fileIcon>
                <img src={fileIcon} alt="아이콘" />
            </S.fileIcon>

            <InfoContainer
                type="contentOnly"
                width={containerStyle.width}
                height={containerStyle.height}
                top="0px"
                showLogo={false}
                showTitleText={false}
                mainText={`${user.user.name} 메이트님에게`}
                detailText={
                    isMobileScreen
                        ? `관심 직무에 맞는 템플릿을 제공하기 위해 
                프로필 분석이 필요해요!
                아래 '내 프로필 분석하기'를 클릭해주세요.`
                        : `관심 직무에 맞는 템플릿을 제공하기 위해 프로필 분석이 필요해요!
                아래 '내 프로필 분석하기'를 클릭해주세요.`
                }
                mainFontSize={containerStyle.mainFontSize}
                detailFontSize={containerStyle.detailFontSize}
                buttons={[
                    {
                        text: '내 프로필 분석하기',
                        width: containerStyle.button.buttonWidth,
                        height: containerStyle.button.buttonHeight,
                        fontSize: containerStyle.button.buttonFontSize,
                        onClick: handleButtonClick,
                    },
                ]}
            />

            {isPopUpVisible &&
                (isMobileScreen ? (
                    <MobileLoadingPopup
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
