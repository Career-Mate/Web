import * as S from './styled/styled';
import { useState } from 'react';
import InternExperiencePage from '../InternExperiencePage/InternExperiencePage';
import ProjectExperiencePage from '../ProjectExperiencePage/ProjectExperiencePage';
import OtherExperiencePage from '../OtherExperiencePage/OtherExperiencePage';
import SkillsPage from '../SkillsPage/SkillsPage';
import FinalSummaryPage from '../FinalSummaryPage/FinalSummaryPage';
import CareerSavePage from '../CareerSavePage/CareerSavePage';
import CareerMainPage from '../CareerMainPage/CareerMainPage';

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
                return <FinalSummaryPage setActiveScreen={setActiveScreen} />;
            case 5:
                return <CareerSavePage setActiveScreen={setActiveScreen} />;
            default:
                return <CareerMainPage />;
        }
    };

    return (
        <S.PageContainer>
            <S.MainContainer>{renderScreen()}</S.MainContainer>
        </S.PageContainer>
    );
};
export default CareerNotePage;
