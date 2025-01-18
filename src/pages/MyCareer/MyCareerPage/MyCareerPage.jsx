import * as S from './styled/styled';

import SubMenu from '../../../components/common/Menu/SubMenu/SubMenu';
import HomePage from '../../HomePage';
import SmartPlannerPage from '../SmartPlannerPage/SmartPlannerPage';
import { useState } from 'react';


const MyCareerPage = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    const renderScreen = () => {
        switch (activeScreen) {
            case 0:
                return <HomePage />;
            case 1:
                return <HomePage />;
            case 2:
                return <HomePage />;
            case 3:
                return <SmartPlannerPage />;
            default:
                return <HomePage />;
        }
    };
    return (
        <S.PageContainer>
            <S.SideContainer>
                <SubMenu onSelect={setActiveScreen}/>
            </S.SideContainer>
            <S.MainContainer>
                {renderScreen()}
            </S.MainContainer>
        </S.PageContainer>
    );
};

export default MyCareerPage;
