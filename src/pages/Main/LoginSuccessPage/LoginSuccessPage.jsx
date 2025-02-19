import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import { useFetchProfile } from '../../../apis/Profile/useProfileApi';
import { useEffect } from 'react';
import { useAuthStore } from '../../../store/authStore';
import useContainerStyle from '../../../hooks/useContainerStyle';

const LoginSuccessPage = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore();
    const { data, error } = useFetchProfile();
    useEffect(() => {
        if (data) {
            login(data);
        }
    }, [data]);

    const containerStyle = useContainerStyle('full');

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
                detailText={`메이트님에게 최적의 서비스를 제공할 수 있도록
                프로필을 설정해주세요!`}
                mainFontSize={containerStyle.mainFontSize}
                detailFontSize={containerStyle.detailFontSize}
                buttons={[
                    {
                        text: '지금 바로 프로필 설정하기',
                        width: containerStyle.button.buttonWidth,
                        height: containerStyle.button.buttonHeight,
                        fontSize: containerStyle.button.buttonFontSize,
                        backgroundColor: 'rgba(43, 157, 143, 1)',
                        onClick: () => navigate('/profile'),
                    },
                ]}
            />
        </>
    );
};

export default LoginSuccessPage;
