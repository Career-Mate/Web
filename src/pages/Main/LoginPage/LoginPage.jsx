import * as S from './styled/styled';
import Naver from '../../../assets/LoginPage/naver.svg';
import Kakao from '../../../assets/LoginPage/kakao.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import useContainerStyle from '../../../hooks/useContainerStyle';

const LoginPage = () => {
    const apiURL = `${import.meta.env.VITE_API_BASE_URL}/oauth2/authorization`;

    const containerStyle = useContainerStyle('full');

    return (
        <InfoContainer
            type="logoOnly"
            width={containerStyle.width}
            height={containerStyle.height}
            top="300px"
            showLogo={true}
            mainText={
                <S.Container>
                    <S.Text>SNS로 시작하기</S.Text>
                    <S.SocialButtonWrapper>
                        <a href={`${apiURL}/naver`}>
                            <S.SocialButton
                                $type="naver"
                                width={containerStyle.button.buttonWidth}
                                height={containerStyle.button.buttonHeight}
                                fontSize={containerStyle.button.buttonFontSize}
                            >
                                <S.SocialImg src={Naver} alt="naver"></S.SocialImg>
                                네이버로 시작하기
                            </S.SocialButton>
                        </a>
                        <a href={`${apiURL}/kakao`}>
                            <S.SocialButton
                                $type="kakao"
                                width={containerStyle.button.buttonWidth}
                                height={containerStyle.button.buttonHeight}
                                fontSize={containerStyle.button.buttonFontSize}
                            >
                                <S.SocialImg src={Kakao} alt="kakao"></S.SocialImg>
                                카카오로 시작하기
                            </S.SocialButton>
                        </a>
                    </S.SocialButtonWrapper>
                </S.Container>
            }
            mainFontSize={containerStyle.mainFontSize}
        />
    );
};

export default LoginPage;
