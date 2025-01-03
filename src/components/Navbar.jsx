import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/career-mate.png'; 


const Navbar=()=>{
    const navigate=useNavigate();
    const location=useLocation();

    const isActive = (path) => location.pathname.startsWith(`/${path}`);

    return(
        <NavbarContainer>
            <Conatiner>
                <Bar>
                    <LogoWrapper>
                        <Logo src={logo}
                            onClick={()=>navigate(``)}
                        />
                    </LogoWrapper>
                    <Texts>
                        <Text 
                            $active={isActive('career')}
                            onClick={()=>navigate(`career`)}
                        >
                            커리어 정리하기
                        </Text>
                        <Text 
                            $active={isActive('announcement')}
                            onClick={()=>navigate(`announcement`)}
                        >
                            추천 공고
                        </Text>
                        <Text 
                            $active={isActive('mycareer')}
                            onClick={()=>navigate(`mycareer`)}
                        >
                            나의 커리어
                        </Text>
                    </Texts>
                </Bar>
            </Conatiner>
            <GradientBorder />
        </NavbarContainer>
    )
}

export default Navbar;


const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-self: center;
    width: 98%;
    height:111px;
    position: relative;
`;

const Conatiner=styled.div`
    display: flex;
    justify-content: space-between;
    height:100%;
    position: relative; 
`;

const Bar = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:flex-end;
    width: 750px;
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width:40%;
`;

const Logo=styled.img`
    width: 100%;  
    cursor: pointer;
    object-fit: cover;
    clip-path: inset(20% 0 25% 0);
    position: relative;
    transform: translateY(25%); 
`;


const Texts=styled.div`
    display: flex;
    justify-content: space-between;
`;

const Text = styled.div`
    font-size:16px;
    cursor: pointer; 
    text-align:center;
    padding:10px 20px;
    border-radius:10px 10px 0 0;
    box-sizing: border-box;
    font-weight:${({ $active }) => ($active ? " 700" : "normal")};
    color:${({ $active }) => ($active ? " #66CCAA" : "black")};
    border:${({ $active }) => ($active ? "3px solid #80CFB0" : "3px solid transparent")};
`;

const GradientBorder = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px; 
    border-radius:4px;
    background: linear-gradient(to right, #66CCAA, #A8D5BA);
`;
