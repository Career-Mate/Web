import TextTemplate from '../../../components/common/TextTemplate/TextTemplate';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import { useSkills } from './useSkills';
import useProgressBar from '../../../hooks/useProgressBar';

const SkillsPage = ({ setActiveScreen }) => {
    const { data, setData, canSave, handleSave } = useSkills();
    const { progression, prevSummaryProgress, nextSummaryProgress } = useProgressBar(4);

    const handlePrevClick = () => {
        prevSummaryProgress();
        setActiveScreen(2);
    };

    const handleNextClick = () => {
        nextSummaryProgress();
        setActiveScreen(4);
    };

    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.TitleGroup>
                    <S.Title>4. 보유 기술 및 업무 성향</S.Title>
                    <S.Subtitle>※ 최대 2개까지 작성할 수 있어요.</S.Subtitle>
                </S.TitleGroup>
                <ProgressBar progression={progression} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <TextTemplate data={data} onDataChange={(updatedData) => setData(updatedData)} />
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

export default SkillsPage;
