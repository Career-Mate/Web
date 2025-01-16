import { useState } from 'react';
import searchIcon from '../../../assets/MainPage/search.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import * as S from './styled/styled';

const CareerMainPage = () => {
    const userName = '김단아';
    const job = '프론트엔드 개발자';
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

            <InfoContainer
                type="contentOnly"
                width="655px"
                height="405px"
                top="0px"
                showLogo={false}
                showTitleText={false}
                mainText={`${userName} 메이트님에게`}
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
                <LoadingPopup userName={userName} interestJob={job} type="template" onCancel={handlePopUpCancel} />
            )}
        </S.CareerMainPageWrapper>
    );
};

export default CareerMainPage;
