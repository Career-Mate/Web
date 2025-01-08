import * as S from "./styled/styled.js"
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/career-mate.svg';
import LogoutButton from "../../Button/LogoutButton/LogoutButton.jsx";
import SquareButton from"../../Button/SquareButton/SquareButton.jsx";

const Navbar=()=>{
    const navigate=useNavigate();
    const location=useLocation();

    const isActive = (path) => location.pathname.startsWith(`/${path}`);

    return(
        <S.NavbarContainer>
            <S.Container>
                <S.LogoWrapper>
                    <S.Logo src={logo}
                        onClick={()=>navigate(``)}
                    />
                </S.LogoWrapper>
                <S.Bar>
                    <S.TextWrapper>
                        <S.Text
                            $active={isActive('career')}
                            onClick={()=>navigate(`career`)}
                        >
                            커리어 정리하기
                        </S.Text>
                        <S.Text
                            $active={isActive('announcement')}
                            onClick={()=>navigate(`announcement`)}
                        >
                            추천 공고
                        </S.Text>
                        <S.Text
                            $active={isActive('mycareer')}
                            onClick={()=>navigate(`mycareer`)}
                        >
                            나의 커리어
                        </S.Text>
                    </S.TextWrapper>
                    <S.ButtonWrapper>
                        <LogoutButton name={"김단아"} />
                    </S.ButtonWrapper>
                </S.Bar>
            </S.Container>
            <S.GradientBorder />
        </S.NavbarContainer>
    )
}

export default Navbar;

