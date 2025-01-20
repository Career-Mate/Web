import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import { useEffect } from 'react';
import useOAuthPopUp from '../../../hooks/useOAuthPopUp';
import useOAuth from '../../../hooks/useOAuth';

const LoginSuccessPage = () => {
    const { isLogin } = useOAuth();
    const userName = '김단아';
    const navigate = useNavigate();

    return (
        <>
            {isLogin === true ? (
                <InfoContainer
                    type="logoWithContent"
                    width="756px"
                    height="394.13px"
                    top="286.87px"
                    showLogo={true}
                    showTitleText={false}
                    mainText="로그인 성공"
                    detailText={`${userName} 메이트님에게 최적의 서비스를 제공할 수 있도록 프로필을 설정해주세요`}
                    buttons={[
                        {
                            text: '지금 바로 프로필 설정하기',
                            width: '375px',
                            height: '60px',
                            padding: '18px',
                            backgroundColor: 'rgba(43, 157, 143, 1)',
                            onClick: () => console.log('커리어 정리하기기'),
                        },
                    ]}
                />
            ) : (
                <InfoContainer
                    type="logoWithContent"
                    width="756px"
                    height="394.13px"
                    top="286.87px"
                    showLogo={true}
                    showTitleText={false}
                    mainText="로그인이 필요합니다"
                    buttons={[
                        {
                            text: '지금 바로 로그인 하기',
                            width: '375px',
                            height: '60px',
                            padding: '18px',
                            backgroundColor: 'rgba(43, 157, 143, 1)',
                            onClick: () => navigate('/login'),
                        },
                    ]}
                />
            )}
        </>
    );
};

export default LoginSuccessPage;
