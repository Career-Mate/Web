import Template from '../../../components/common/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import { useInternExperience } from './useInternExperience';

const InternExperiencePage = () => {
    const { data, setData, canSave, handleSave, handleNext } = useInternExperience();

    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.Title>1. 인턴 경험</S.Title>
                <ProgressBar progression={1} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <Template
                    jobType="frontend"
                    pageType="internExperience"
                    onDataChange={(updatedData) => setData(updatedData)}
                />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton width="131px" backgroundColor={'deepgreen'} onClick={handleSave} disabled={!canSave}>
                    저장
                </SquareButton>
                <SquareButton width="131px" backgroundColor={'lightgreen'} onClick={handleNext}>
                    다음
                </SquareButton>
            </S.ButtonWrapper>
        </S.PageWrapper>
    );
};

export default InternExperiencePage;
