import * as S from './styled/styled';
import Naver from '../../../assets/LoginPage/naver.svg';
import Kakao from '../../../assets/LoginPage/kakao.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import { useMemo } from 'react';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const LoginPage = () => {
    const apiURL = `${import.meta.env.VITE_API_BASE_URL}/oauth2/authorization`;

    const isMobileScreen = useIsMobileScreen(430);
    const isTabletScreen = useIsMobileScreen(1024);

    const containerStyle = useMemo(() => {
        if (isMobileScreen) {
            return {
                width: '280px',
                height: '278px',
                mainFontSize: '16px',
                buttonWidth: '232px',
                buttonHeight: '37px',
                buttonFontSize: '14px',
            };
        } else if (isTabletScreen) {
            return {
                width: '600px',
                height: '424px',
                mainFontSize: '30px',
                buttonWidth: '415px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            };
        } else {
            return {
                width: '590px',
                height: '392px',
                mainFontSize: '24px',
                buttonWidth: '503px',
                buttonHeight: '57px',
                buttonFontSize: '16px',
            };
        }
    }, [isMobileScreen, isTabletScreen]);

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
                                width={containerStyle.buttonWidth}
                                height={containerStyle.buttonHeight}
                                fontSize={containerStyle.buttonFontSize}
                            >
                                <S.SocialImg src={Naver} alt="naver"></S.SocialImg>
                                네이버로 시작하기
                            </S.SocialButton>
                        </a>
                        <a href={`${apiURL}/kakao`}>
                            <S.SocialButton
                                $type="kakao"
                                width={containerStyle.buttonWidth}
                                height={containerStyle.buttonHeight}
                                fontSize={containerStyle.buttonFontSize}
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
