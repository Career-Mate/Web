import * as S from './styled/styled';
import HomePage from '../../HomePage';
import InternExperiencePage from '../InternExperiencePage/InternExperiencePage';
import { useState } from 'react';

const CareerNotePage = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    const renderScreen = () => {
        switch (activeScreen) {
            case 0:
                return <InternExperiencePage setActiveScreen={setActiveScreen} />;
            case 1:
                return <HomePage />;
            case 2:
                return <HomePage />;
            case 3:
                return <HomePage />;
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
