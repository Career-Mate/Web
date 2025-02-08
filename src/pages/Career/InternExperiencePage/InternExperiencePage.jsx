import Template from '../../../components/common/Templates/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import useTemplateData from '../../../hooks/useTemplateData';
import useProgressBar from '../../../hooks/useProgressBar';

const InternExperiencePage = ({ setActiveScreen }) => {
    const { data, setData, canSave, handleSave } = useTemplateData('INTERN_EXPERIENCE');
    const { progression, nextSummaryProgress } = useProgressBar(1);

    const handleNextClick = () => {
        nextSummaryProgress();
        setActiveScreen(1);
    };

    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.TitleGroup>
                    <S.Title>1. 인턴 경험</S.Title>
                    <S.Subtitle>※ 최대 2개까지 작성할 수 있어요.</S.Subtitle>
                </S.TitleGroup>
                <ProgressBar progression={progression} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <Template pageType="INTERN_EXPERIENCE" onDataChange={(updatedData) => setData(updatedData)} />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton width="131px" backgroundColor={'deepgreen'} onClick={handleSave} disabled={!canSave}>
                    저장
                </SquareButton>
                <SquareButton width="131px" backgroundColor={'lightgreen'} onClick={handleNextClick}>
                    다음
                </SquareButton>
            </S.ButtonWrapper>
        </S.PageWrapper>
    );
};

export default InternExperiencePage;
