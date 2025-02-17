import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import { useFetchProfile } from '../../../apis/Profile/useProfileApi';
import { useEffect, useMemo } from 'react';
import { useAuthStore } from '../../../store/authStore';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const LoginSuccessPage = () => {
    const navigate = useNavigate();
    const { login, user } = useAuthStore();
    const { data, error } = useFetchProfile();
    useEffect(() => {
        if (data) {
            login(data);
        }
    }, [data]);

    const isMobileScreen = useIsMobileScreen(430);
    const isTabletScreen = useIsMobileScreen(1024);

    const containerStyle = useMemo(() => {
        if (isMobileScreen) {
            return {
                width: '280px',
                height: '278px',
                mainFontSize: '16px',
                detailFontSize: '10px',
                $buttonWidth: '213px',
                buttonHeight: '39px',
                buttonFontSize: '12px',
            };
        } else if (isTabletScreen) {
            return {
                width: '600px',
                height: '394px',
                mainFontSize: '30px',
                detailFontSize: '16px',
                buttonWidth: '375px',
                buttonHeight: '55px',
                buttonFontSize: '16px',
            };
        } else {
            return {
                width: '519px',
                height: '379px',
                mainFontSize: '24px',
                detailFontSize: '16px',
                buttonWidth: '372px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            };
        }
    }, [isMobileScreen, isTabletScreen]);

    console.log('login', login);
    return (
        <>
            <InfoContainer
                type="logoWithContent"
                width={containerStyle.width}
                height={containerStyle.height}
                top="286.87px"
                showLogo={true}
                showTitleText={false}
                mainText="로그인 성공"
                detailText={`${user.name} 메이트님에게 최적의 서비스를 제공할 수 있도록
                프로필을 설정해주세요!`}
                mainFontSize={containerStyle.mainFontSize}
                detailFontSize={containerStyle.detailFontSize}
                buttons={[
                    {
                        text: '지금 바로 프로필 설정하기',
                        width: containerStyle.buttonWidth,
                        height: containerStyle.buttonHeight,
                        fontSize: containerStyle.buttonFontSize,
                        backgroundColor: 'rgba(43, 157, 143, 1)',
                        onClick: () => navigate('/profile'),
                    },
                ]}
            />
        </>
    );
};

export default LoginSuccessPage;
