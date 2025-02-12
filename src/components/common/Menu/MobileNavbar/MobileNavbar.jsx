import { useEffect, useRef, useState } from 'react';
import * as S from './styled/styled.js';
import LogoImg from '../../../../assets/common/career-mate.svg';
import Hamberger from '../../../../assets/Navbar/hamburger-menu.svg';
import CloseBtn from '../../../../assets/Navbar/close.svg';
import Home from '../../../../assets/Navbar/home.svg';
import Career from '../../../../assets/Navbar/career.svg';
import Keep from '../../../../assets/Navbar/keep.svg';
import Account from '../../../../assets/Navbar/account_circle.svg';
import DropDown from '../../../../assets/Navbar/drop-down.svg';
import DropUp from '../../../../assets/Navbar/drop-up.svg';
import Detail from '../../../../assets/Navbar/detail.svg';

const MobileNavbar = ({ isLogin, user, navigate, isActive, onLogout }) => {
    const [istoggleSide, setToggleSide] = useState(false);
    const [isAccountToggle, setAccountToggle] = useState(false);
    const toggleRef = useRef(null); // ToggleContainer 참조

    const handleOpenToggle = () => {
        setToggleSide(true);
    };
    const handleCloseToggle = () => {
        setToggleSide(false);
    };

    const handleAccountToggle = () => {
        setAccountToggle(!isAccountToggle);
    };
    // 메뉴 외부 클릭 시 토글 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target)) {
                setToggleSide(false); // 메뉴 외부 클릭 시 토글 닫기
            }
        };

        // 클릭 이벤트 리스너 추가
        document.addEventListener('mousedown', handleClickOutside);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <S.NavbarContainer>
            <S.LogoWrapper>
                <S.Logo src={LogoImg} />
            </S.LogoWrapper>
            <S.MenuBtn onClick={handleOpenToggle}>
                <img src={Hamberger} />
            </S.MenuBtn>

            <S.ToggleContainer ref={toggleRef} className={istoggleSide ? 'open' : ''}>
                <S.Header>
                    <img src={CloseBtn} onClick={handleCloseToggle} />
                    <S.HeaderWrapper>
                        {!isLogin ? (
                            <S.HeaderButton
                                onClick={() => {
                                    navigate('/login');
                                    setToggleSide(false);
                                    setAccountToggle(false);
                                }}
                            >
                                <span>로그인 하세요</span>
                                <img src={Detail} height="9px" />
                            </S.HeaderButton>
                        ) : (
                            <S.Name>
                                {user?.name?.trim() ? (
                                    <>
                                        <b>{user.name}</b>님, 환영합니다!
                                    </>
                                ) : (
                                    <div
                                        onClick={() => {
                                            navigate('/profile');
                                            setToggleSide(false);
                                            setAccountToggle(false);
                                        }}
                                    >
                                        프로필 설정하기
                                    </div>
                                )}
                            </S.Name>
                        )}
                    </S.HeaderWrapper>
                </S.Header>
                <S.MenuWrapper>
                    <S.Option
                        onClick={() => {
                            navigate('/');
                            setToggleSide(false);
                            setAccountToggle(false);
                        }}
                    >
                        <img src={Home} />
                        <span>메인 화면</span>
                    </S.Option>
                    <S.Option
                        $active={isActive('career')}
                        onClick={() => {
                            navigate('/career');
                            setToggleSide(false);
                            setAccountToggle(false);
                        }}
                    >
                        <img src={Career} />
                        <span>커리어 정리하기</span>
                    </S.Option>
                    <S.Option
                        $active={isActive('recommend')}
                        onClick={() => {
                            navigate('/recommend');
                            setToggleSide(false);
                            setAccountToggle(false);
                        }}
                    >
                        <img src={Keep} />
                        <span>추천 공고</span>
                    </S.Option>
                    <S.Option $active={isAccountToggle} onClick={handleAccountToggle}>
                        <img src={Account} />
                        <span>나의 커리어</span>
                        <S.Drop src={isAccountToggle ? DropUp : DropDown} />
                    </S.Option>
                    {isAccountToggle && (
                        <>
                            <S.AccountOption
                                onClick={() => {
                                    navigate('/mycareer');
                                    setToggleSide(false);
                                    setAccountToggle(false);
                                }}
                            >
                                <span>프로필 수정하기</span>
                            </S.AccountOption>
                            <S.AccountOption
                                onClick={() => {
                                    navigate('/mycareer/saved-content');
                                    setToggleSide(false);
                                    setAccountToggle(false);
                                }}
                            >
                                <span>스크랩한 콘텐츠 및 공고 확인하기</span>
                            </S.AccountOption>
                            <S.AccountOption
                                onClick={() => {
                                    navigate('/mycareer/smart-planner');
                                    setToggleSide(false);
                                    setAccountToggle(false);
                                }}
                            >
                                <span>SMART 커리어 플래너</span>
                            </S.AccountOption>
                        </>
                    )}
                </S.MenuWrapper>
                {isLogin && <S.Logout onClick={onLogout}>로그아웃</S.Logout>}
            </S.ToggleContainer>

            <S.GradientBorder />
        </S.NavbarContainer>
    );
};

export default MobileNavbar;
