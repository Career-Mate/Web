import * as S from './styled/styled';
import HomePage from '../../HomePage';
import { useState } from 'react';
import InternExperiencePage from '../InternExperiencePage/InternExperiencePage';
import ProjectExperiencePage from '../ProjectExperiencePage/ProjectExperiencePage';
import OtherExperiencePage from '../OtherExperiencePage/OtherExperiencePage';
import SkillsPage from '../SkillsPage/SkillsPage';

const CareerNotePage = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    const renderScreen = () => {
        switch (activeScreen) {
            case 0:
                return <InternExperiencePage setActiveScreen={setActiveScreen} />;
            case 1:
                return <ProjectExperiencePage setActiveScreen={setActiveScreen} />;
            case 2:
                return <OtherExperiencePage setActiveScreen={setActiveScreen} />;
            case 3:
                return <SkillsPage setActiveScreen={setActiveScreen} />;
            case 4:
                return <HomePage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <S.PageContainer>
            <S.MainContainer>{renderScreen()}</S.MainContainer>
        </S.PageContainer>
    );
};
export default CareerNotePage;
