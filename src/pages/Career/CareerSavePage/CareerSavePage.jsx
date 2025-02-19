import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import * as S from './styled/styled';
import { useAuthStore } from '../../../store/authStore';
import { useEffect } from 'react';
import useContainerStyle from '../../../hooks/useContainerStyle';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const CareerSavePage = () => {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    const isMobileScreen = useIsMobileScreen(430);

    const handleNavigation = (path) => {
        navigate(path);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerStyle = useContainerStyle('half');

    return (
        <S.CareerSavePageWrapper>
            <InfoContainer
                type="logoWithContent"
                width={containerStyle.width}
                height={containerStyle.height}
                top="230px"
                showLogo={true}
                showTitleText={false}
                mainText={
                    isMobileScreen
                        ? `${user.name} 메이트님의 커리어가 
                저장되었습니다.`
                        : `${user.name} 메이트님의 커리어가 저장되었습니다.`
                }
                detailText="정리한 커리어를 바탕으로 채용 공고 추천도 받을 수 있어요!"
                mainFontSize={containerStyle.mainFontSize}
                detailFontSize={containerStyle.detailFontSize}
                buttons={[
                    {
                        text: '채용 공고 추천 받기',
                        width: containerStyle.button.buttonWidth,
                        height: containerStyle.button.buttonHeight,
                        fontSize: containerStyle.button.buttonFontSize,
                        backgroundColor: 'deepgreen',
                        onClick: () => handleNavigation('/recommend'),
                    },
                    {
                        text: '메인화면으로 돌아가기',
                        width: containerStyle.button.buttonWidth,
                        height: containerStyle.button.buttonHeight,
                        fontSize: containerStyle.button.buttonFontSize,
                        backgroundColor: 'grey',
                        onClick: () => handleNavigation('/'),
                    },
                ]}
            />
        </S.CareerSavePageWrapper>
    );
};

export default CareerSavePage;
