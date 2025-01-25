import * as S from './styled/styled';
import Naver from '../../../assets/LoginPage/naver.svg';
import Kakao from '../../../assets/LoginPage/kakao.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import useLoginPopUp from '../../../hooks/useLoginPopUp';
import { useEffect } from 'react';

const LoginPage = () => {
    const { open, code } = useLoginPopUp();

    useEffect(() => {
        if (code) {
            console.log('받은 인증 코드:', code);
        }
    }, [code]);

    return (
        <InfoContainer
            type="logoOnly"
            width="768px"
            height="500px"
            top="300px"
            showLogo={true}
            mainText={
                <S.Container>
                    <S.Text>SNS로 시작하기</S.Text>
                    <S.SocialButtonWrapper>
                        <a href="/oauth2/authorization/naver">
                            <S.SocialButton $type="naver">
                                <img src={Naver} alt="naver"></img>
                                네이버로 시작하기
                            </S.SocialButton>
                        </a>
                        <a href="/oauth2/authorization/kakao">
                            <S.SocialButton $type="kakao">
                                <img src={Kakao} alt="kakao"></img>
                                카카오로 시작하기
                            </S.SocialButton>
                        </a>
                    </S.SocialButtonWrapper>
                </S.Container>
            }
        />
    );
};

export default LoginPage;
