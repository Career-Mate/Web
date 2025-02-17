import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import * as S from './styled/styled';
import { useAuthStore } from '../../../store/authStore';
import { useMemo } from 'react';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const CareerSavePage = () => {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const isMobileScreen = useIsMobileScreen(430);
    const isTabletScreen = useIsMobileScreen(1024);

    const containerStyle = useMemo(() => {
        if (isMobileScreen) {
            return {
                width: '280px',
                height: '296px',
                mainFontSize: '16px',
                detailFontSize: '9px',
                buttonWidth: '232px',
                buttonHeight: '39px',
                buttonFontSize: '12px',
            };
        } else if (isTabletScreen) {
            return {
                width: '646px',
                height: '338px',
                mainFontSize: '26px',
                detailFontSize: '20px',
                buttonWidth: '260px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            };
        } else {
            return {
                width: '748px',
                height: '373px',
                mainFontSize: '24px',
                detailFontSize: '16px',
                buttonWidth: '330px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            };
        }
    }, [isMobileScreen, isTabletScreen]);

    return (
        <S.CareerSavePageWrapper>
            <InfoContainer
                type="logoWithContent"
                width={containerStyle.width}
                height={containerStyle.height}
                top="327.73px"
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
                        width: containerStyle.buttonWidth,
                        height: containerStyle.buttonHeight,
                        fontSize: containerStyle.buttonFontSize,
                        padding: '0px',
                        backgroundColor: 'deepgreen',
                        onClick: () => handleNavigation('/recommend'),
                    },
                    {
                        text: '메인화면으로 돌아가기',
                        width: containerStyle.buttonWidth,
                        height: containerStyle.buttonHeight,
                        fontSize: containerStyle.buttonFontSize,
                        padding: '0px',
                        backgroundColor: 'grey',
                        onClick: () => handleNavigation('/'),
                    },
                ]}
            />
        </S.CareerSavePageWrapper>
    );
};

export default CareerSavePage;
