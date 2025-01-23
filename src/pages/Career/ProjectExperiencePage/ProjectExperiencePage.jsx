import Template from '../../../components/common/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import { useProjectExperience } from './useProjectExperience';
import useProgressBar from '../../../hooks/useProgressBar';

const ProjectExperiencePage = ({ setActiveScreen }) => {
    const { data, setData, canSave, handleSave } = useProjectExperience();
    const { progression, prevSummaryProgress, nextSummaryProgress } = useProgressBar(2);

    const handlePrevClick = () => {
        prevSummaryProgress();
        setActiveScreen(0);
    };

    const handleNextClick = () => {
        nextSummaryProgress();
        setActiveScreen(2);
    };

    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.TitleGroup>
                    <S.Title>2. 프로젝트 경험</S.Title>
                    <S.Subtitle>※ 최대 2개까지 작성할 수 있어요.</S.Subtitle>
                </S.TitleGroup>
                <ProgressBar progression={progression} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <Template
                    jobType="frontend"
                    pageType="projectExperience"
                    data={data}
                    onDataChange={(updatedData) => setData(updatedData)}
                />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton width="131px" backgroundColor={'deepgreen'} onClick={handleSave} disabled={!canSave}>
                    저장
                </SquareButton>
                <div>
                    <SquareButton width="131px" backgroundColor={'grey'} onClick={handlePrevClick}>
                        이전
                    </SquareButton>
                    <SquareButton width="131px" backgroundColor={'lightgreen'} onClick={handleNextClick}>
                        다음
                    </SquareButton>
                </div>
            </S.ButtonWrapper>
        </S.PageWrapper>
    );
};

export default ProjectExperiencePage;
