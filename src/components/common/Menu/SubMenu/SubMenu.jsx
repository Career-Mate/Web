import { useState, useEffect  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './styled/styled.js';


const SubMenu = () => {

    const pathToButtonMap = {
        '/mycareer': 0,
        '/mycareer/career-form': 1,
        '/mycareer/saved-content': 2,
        '/mycareer/smart-planner': 3,
    };
    
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(pathToButtonMap[location.pathname]);

    useEffect(() => {
        const currentPath = location.pathname;
        const buttonIndex = pathToButtonMap[currentPath];
        if (buttonIndex !== undefined) {
            setActiveButton(buttonIndex);
        }
    }, [location]);

    const handleButtonClick = (flag,path) => {
        setActiveButton(flag);
        navigate(path);
    };

    return (
        <S.Container>
            <S.ButtonWrapper>
                <S.Button $isActive={activeButton === 0} onClick={() => handleButtonClick(0,'/mycareer')}>
                    프로필 수정
                </S.Button>
                <S.Button $isActive={activeButton === 1} onClick={() => handleButtonClick(1,'/mycareer/career-form')}>
                    커리어 정리 폼 확인 및 수정하기
                </S.Button>
                <S.Button $isActive={activeButton === 2} onClick={() => handleButtonClick(2,'/mycareer/saved-content')}>
                    스크랩한 콘텐츠 및 공고 확인하기
                </S.Button>
                <S.Button $isActive={activeButton === 3} onClick={() => handleButtonClick(3,'/mycareer/smart-planner')}>
                    SMART 커리어 플래너
                </S.Button>
            </S.ButtonWrapper>
        </S.Container>
    );
};

export default SubMenu;
