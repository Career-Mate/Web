import * as S from './styled/styled';
import Naver from '../../../assets/LoginPage/naver.svg';
import Kakao from '../../../assets/LoginPage/kakao.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import useOAuthPopUp from '../../../hooks/useOAuthPopUp';
import { useEffect } from 'react';

const LoginPage = () => {
    const { open, code, fetchToken } = useOAuthPopUp();

    useEffect(() => {
        if (code) {
            console.log('받은 인증 코드:', code);
            fetchToken();
        }
    }, [code]);

    return (
        <InfoContainer>
            <S.Container>
                <S.Text>SNS로 시작하기</S.Text>
                <S.SocialButtonWrapper>
                    <S.SocialButton $type="naver" onClick={() => open('naver')}>
                        <img src={Naver} alt="naver"></img>
                        네이버로 시작하기
                    </S.SocialButton>
                    <S.SocialButton $type="kakao" onClick={() => open('kakao')}>
                        <img src={Kakao} alt="kakao"></img>
                        카카오로 시작하기
                    </S.SocialButton>
                </S.SocialButtonWrapper>
            </S.Container>
        </InfoContainer>
    );
};

export default LoginPage;
