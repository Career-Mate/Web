import { useState } from 'react';
import TemplateCategory from '../../../components/common/Templates/TemplateCategory/TemplateCategory.jsx';
import MobileInternExperiencePage from '../InternExperiencePage/MobileInternExperiencePage.jsx';
import MobileProjectExperiencePage from '../ProjectExperiencePage/MobileProjectExperiencePage.jsx';
import MobileOtherExperiencePage from '../OtherExperiencePage/MobileOtherExperiencePage.jsx';
import MobileSkillsPage from '../SkillsPage/MobileSkillsPage.jsx';
import MobileFinalSummaryPage from '../FinalSummaryPage/MobileFinalSummaryPage.jsx';

const MobileCareerNotePage = () => {
    const [currentCategory, setCurrentCategory] = useState(0);

    const renderCategoryPage = () => {
        switch (currentCategory) {
            case 0:
                return <MobileInternExperiencePage />;
            case 1:
                return <MobileProjectExperiencePage />;
            case 2:
                return <MobileOtherExperiencePage />;
            case 3:
                return <MobileSkillsPage />;
            case 4:
                return <MobileFinalSummaryPage />;
            default:
                return <CareerMainPage />;
        }
    };

    return (
        <>
            <TemplateCategory
                handlePrevPage={() => setCurrentCategory((prev) => Math.max(prev - 1, 0))}
                handleNextPage={() => setCurrentCategory((prev) => Math.min(prev + 1, 4))}
            />
            <h5>※ 최대 2개까지 작성할 수 있어요.</h5>
            <div>{renderCategoryPage()}</div>
        </>
    );
};

export default MobileCareerNotePage;
