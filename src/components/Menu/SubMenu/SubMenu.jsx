import { useState } from 'react';
import * as S from './styled/styled.js';

const SubMenu = () => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (flag) => {
        setActiveButton(flag);
    };

    return (
        <S.Conatiner>
            <S.Button $isActive={activeButton === 0} onClick={() => handleButtonClick(0)}>
                프로필 수정
            </S.Button>
            <S.Button $isActive={activeButton === 1} onClick={() => handleButtonClick(1)}>
                커리어 정리 폼 확인 및 수정하기
            </S.Button>
            <S.Button $isActive={activeButton === 2} onClick={() => handleButtonClick(2)}>
                스크랩한 콘텐츠 및 공고 확인하기
            </S.Button>
            <S.Button $isActive={activeButton === 3} onClick={() => handleButtonClick(3)}>
                SMART 커리어 플래너
            </S.Button>
        </S.Conatiner>
    );
};

export default SubMenu;
