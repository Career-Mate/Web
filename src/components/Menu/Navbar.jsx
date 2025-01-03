import * as S from "./styled/styled-navbar.js"
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/career-mate.png'; 


const Navbar=()=>{
    const navigate=useNavigate();
    const location=useLocation();

    const isActive = (path) => location.pathname.startsWith(`/${path}`);

    return(
        <S.NavbarContainer>
            <S.Conatiner>
                <S.Bar>
                    <S.LogoWrapper>
                        <S.Logo src={logo}
                            onClick={()=>navigate(``)}
                        />
                    </S.LogoWrapper>
                    <S.Texts>
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
                    </S.Texts>
                </S.Bar>
            </S.Conatiner>
            <S.GradientBorder />
        </S.NavbarContainer>
    )
}

export default Navbar;

