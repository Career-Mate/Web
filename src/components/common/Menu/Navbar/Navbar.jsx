import * as S from './styled/styled.js';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/common/career-mate.svg';
import LogoutButton from '../../Button/LogoutButton/LogoutButton.jsx';
import SquareButton from '../../Button/SquareButton/SquareButton.jsx';
import { useState, useEffect } from 'react';
import AccountPopup from '../../Popups/AccountPopup/AccountPopup.jsx';
import MobileAccountPopup from '../../Popups/MobileAccountPopup/MobileAccountPopup.jsx';
import { useAuthStore } from '../../../../store/authStore.js';
import { useLogout } from '../../../../apis/Auth/useAuthApi.js';
import useIsMobileScreen from '../../../../hooks/useIsMobileScreen.js';
import MobileNavbar from '../MobileNavbar/MobileNavbar.jsx';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isPopUp, setIsPopUp] = useState(false);
    const { isLogin, user } = useAuthStore();
    const mutation = useLogout();
    const isMobileScreen = useIsMobileScreen(430);

    const isActive = (path) => location.pathname.startsWith(`/${path}`);

    const handlePopUpOpen = () => {
        setIsPopUp(true);
    };

    const handlePopUpClose = () => {
        setIsPopUp(false);
    };

    const handleLogout = () => {
        setIsPopUp(false);
        mutation.mutate();
    };

    return isMobileScreen ? (
        <>
            <MobileNavbar
                logoSrc={logo}
                isLogin={isLogin}
                user={user}
                onLogout={handleLogout}
                navigate={navigate}
                isActive={isActive}
            />
            {isPopUp && <MobileAccountPopup type="로그아웃" onCancel={handlePopUpClose} onConfirm={handleLogout} />}
        </>
    ) : (
        <S.NavbarContainer>
            <S.Container>
                <S.LogoWrapper>
                    <S.Logo src={logo} onClick={() => navigate(``)} />
                </S.LogoWrapper>
                <S.Bar>
                    <S.TextWrapper>
                        <S.Text $active={isActive('career')} onClick={() => navigate(`career`)}>
                            커리어 정리하기
                        </S.Text>
                        <S.Text $active={isActive('recommend')} onClick={() => navigate(`recommend`)}>
                            추천 공고
                        </S.Text>
                        <S.Text $active={isActive('mycareer')} onClick={() => navigate(`mycareer`)}>
                            나의 커리어
                        </S.Text>
                    </S.TextWrapper>
                    <S.ButtonWrapper>
                        {isLogin ? (
                            <LogoutButton
                                user={user}
                                onProfile={() => navigate('/profile')}
                                onLogout={handlePopUpOpen}
                            />
                        ) : (
                            <SquareButton
                                width={'124px'}
                                height={'30px'}
                                fontSize={'16px'}
                                onClick={() => navigate('/login')}
                            >
                                로그인
                            </SquareButton>
                        )}
                    </S.ButtonWrapper>
                </S.Bar>
            </S.Container>
            <S.GradientBorder />
            {isPopUp && <AccountPopup type="로그아웃" onCancel={handlePopUpClose} onConfirm={handleLogout} />}
        </S.NavbarContainer>
    );
};

export default Navbar;
