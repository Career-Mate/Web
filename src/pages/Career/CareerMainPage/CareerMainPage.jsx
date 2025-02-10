import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../../assets/MainPage/search.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import * as S from './styled/styled';
import ProfilePopup from '../../../components/common/Popups/ProfilePopup/ProfilePopup';
import { useProfilePopup } from '../../../hooks/useProfile';
import { useAuthStore } from '../../../store/authStore';

const CareerMainPage = () => {
    const navigate = useNavigate();
    const user = useAuthStore();
    console.log('user:', user);
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

    return (
        <S.CareerMainPageWrapper>
            <S.SearchIcon>
                <img src={searchIcon} alt="돋보기 아이콘" />
            </S.SearchIcon>

            <InfoContainer
                type="contentOnly"
                width="655px"
                height="405px"
                top="0px"
                showLogo={false}
                showTitleText={false}
                mainText={`${user.user.name} 메이트님에게`}
                detailText={`관심 직무에 맞는 템플릿을 제공하기 위해 프로필 분석이 필요해요!
                아래 '내 프로필 분석하기'를 클릭해주세요.`}
                buttons={[
                    {
                        text: '내 프로필 분석하기',
                        width: '375px',
                        height: '60px',
                        backgroundColor: 'deepgreen',
                        onClick: handleButtonClick,
                    },
                ]}
            />

            {isPopUpVisible && (
                <LoadingPopup
                    userName={user.user.name}
                    interestJob={user.user.job}
                    type="template"
                    onCancel={handlePopUpCancel}
                />
            )}
            {showProfilePopup && <ProfilePopup />}
        </S.CareerMainPageWrapper>
    );
};

export default CareerMainPage;
