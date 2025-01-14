import * as S from './styled/styled';
import Naver from '../../assets/LoginPage/naver.svg';
import Kakao from '../../assets/LoginPage/kakao.svg';
import InfoContainer from '../../components/common/InfoContainer/InfoContainer';

const LoginPage = () => {
    const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
    const NAVER_CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;
    const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;

    const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_CLIENT_SECRET}&redirect_uri=${NAVER_REDIRECT_URI}`;

    const handleLogin = (type) => {
        const url = type === 'kakao' ? kakaoURL : naverURL;
        window.open(url, `${type}LoginPopup`, 'width=500,height=600,scrollbars=yes,resizable=no');
    };

    return (
        <InfoContainer>
            <S.Container>
                <S.Text>SNS로 시작하기</S.Text>
                <S.SocialButtonWrapper>
                    <S.SocialButton $type="naver" onClick={() => handleLogin('naver')}>
                        <img src={Naver} alt="naver"></img>
                        네이버로 시작하기
                    </S.SocialButton>
                    <S.SocialButton $type="kakao" onClick={() => handleLogin('kakao')}>
                        <img src={Kakao} alt="kakao"></img>
                        카카오로 시작하기
                    </S.SocialButton>
                </S.SocialButtonWrapper>
            </S.Container>
        </InfoContainer>
    );
};

export default LoginPage;
