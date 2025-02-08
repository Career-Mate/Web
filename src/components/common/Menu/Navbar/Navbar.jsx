import * as S from './styled/styled.js';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/common/career-mate.svg';
import LogoutButton from '../../Button/LogoutButton/LogoutButton.jsx';
import SquareButton from '../../Button/SquareButton/SquareButton.jsx';
import { useState, useEffect } from 'react';
import AccountPopup from '../../Popups/AccountPopUp/AccountPopUp.jsx';
import { useAuthStore } from '../../../../store/authStore.js';
import { useLogout } from '../../../../apis/Auth/useAuthApi.js';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isPopUp, setIsPopUp] = useState(false);
    const { isLogin, logout, user } = useAuthStore();
    const mutation = useLogout();

    useEffect(() => {
        //console.log(user);
        console.log(isLogin);
    }, [isLogin]);

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
        //logout();
    };

    return (
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
                        {isLogin && user?.name?.trim() ? (
                            <LogoutButton name={user.name} onClick={handlePopUpOpen} />
                        ) : (
                            <SquareButton
                                width={'124px'}
                                height={'30px'}
                                padding={'0'}
                                onClick={() => navigate('/login')}
                            >
                                <span style={{ fontSize: '16px' }}>로그인</span>
                            </SquareButton>
                        )}
                    </S.ButtonWrapper>
                </S.Bar>
            </S.Container>
            <S.GradientBorder />
            {isPopUp && <AccountPopup type={'로그아웃'} onCancel={handlePopUpClose} onConfirm={handleLogout} />}
        </S.NavbarContainer>
    );
};

export default Navbar;
