import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const ProfileSuccessPage = () => {
    const navigate = useNavigate();

    const isMobileScreen = useIsMobileScreen(430);
    const isTabletScreen = useIsMobileScreen(1024);

    const containerStyle = useMemo(() => {
        if (isMobileScreen) {
            return {
                width: '280px',
                height: '296px',
                $mainFontSize: '16px',
                $detailFontSize: '10px',
                buttonWidth: '213px',
                buttonHeight: '39px',
                buttonFontSize: '12px',
            };
        } else if (isTabletScreen) {
            return {
                width: '600px',
                height: '394px',
                $mainFontSize: '30px',
                $detailFontSize: '16px',
                buttonWidth: '250px',
                buttonHeight: '60px',
                buttonFontSize: '20px',
            };
        } else {
            return {
                width: '561px',
                height: '317px',
                $mainFontSize: '24px',
                $detailFontSize: '16px',
                buttonWidth: '230px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            };
        }
    }, [isMobileScreen, isTabletScreen]);

    return (
        <InfoContainer
            type="logoWithContent"
            width={containerStyle.width}
            height={containerStyle.height}
            top="286.87px"
            showLogo={true}
            showTitleText={false}
            mainText="프로필 설정 완료!"
            detailText="이제 커리어 정리와 채용 공고를 추천 받을 수 있어요!"
            mainFontSize={containerStyle.$mainFontSize}
            detailFontSize={containerStyle.$detailFontSize}
            buttons={[
                {
                    text: '커리어 정리하기',
                    width: containerStyle.buttonWidth,
                    height: containerStyle.buttonHeight,
                    fontSize: containerStyle.buttonFontSize,
                    backgroundColor: 'deepgreen',
                    onClick: () => navigate('/career'),
                },
                {
                    text: '메인화면으로 돌아가기',
                    width: containerStyle.buttonWidth,
                    height: containerStyle.buttonHeight,
                    fontSize: containerStyle.buttonFontSize,
                    backgroundColor: 'grey',
                    onClick: () => navigate('/'),
                },
            ]}
        />
    );
};

export default ProfileSuccessPage;
