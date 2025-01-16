import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';

const LoginSuccessPage = () => {
    return (
        <InfoContainer
            type="logoWithContent"
            width="756px"
            height="394.13px"
            top="286.87px"
            showLogo={true}
            showTitleText={false}
            mainText="로그인 성공"
            detailText="000 메이트님에게 최적의 서비스를 제공할 수 있도록 프로필을 설정해주세요"
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
    );
};

export default LoginSuccessPage;
