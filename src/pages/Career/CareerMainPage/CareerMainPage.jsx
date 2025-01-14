import { useState } from 'react';
import searchIcon from '../../../assets/common/search-icon.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/Popups/LoadingPopup/LoadingPopup';
import * as S from './styled/styled';

const CareerMainPage = () => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const handleButtonClick = () => {
        setIsPopUpVisible(true);
    };

    const handlePopUpCancel = () => {
        setIsPopUpVisible(false);
    };

    return (
        <S.CareerMainPageWrapper>
            <S.SearchIcon>
                <img src={searchIcon} alt="돋보기 아이콘" />
            </S.SearchIcon>
            <InfoContainer>
                <h2>김단아 메이트에게</h2>
                <p>직무에 맞는 템플릿을 제공하기 위해 프로필 분석이 필요해요!</p>
                <p>아래 '내 프로필 분석하기'를 클릭해주세요.</p>
                <button onClick={handleButtonClick}>내 프로필 분석하기</button>
            </InfoContainer>
            {isPopUpVisible && (
                <LoadingPopup
                    text={`김단아 메이트님\n 프론트엔드 개발 직무에 맞는 템플릿을 제공해드릴게요!`}
                    onCancel={handlePopUpCancel}
                />
            )}
        </S.CareerMainPageWrapper>
    );
};

export default CareerMainPage;
