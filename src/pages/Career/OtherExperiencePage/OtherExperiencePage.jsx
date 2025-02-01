import Template from '../../../components/common/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import useTemplateData from '../../../apis/CareerTemplate/useTemplateData';
import useProgressBar from '../../../hooks/useProgressBar';

const OtherExperiencePage = ({ setActiveScreen }) => {
    const { data, setData, canSave, handleSave } = useTemplateData('OTHER_ACTIVITIES');
    const { progression, prevSummaryProgress, nextSummaryProgress } = useProgressBar(3);

    const handlePrevClick = () => {
        prevSummaryProgress();
        setActiveScreen(1);
    };

    const handleNextClick = () => {
        nextSummaryProgress();
        setActiveScreen(3);
    };

    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.TitleGroup>
                    <S.Title>3. 기타 활동</S.Title>
                    <S.Subtitle>※ 최대 2개까지 작성할 수 있어요.</S.Subtitle>
                </S.TitleGroup>
                <ProgressBar progression={progression} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <Template pageType="OTHER_ACTIVITIES" onDataChange={(updatedData) => setData(updatedData)} />
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

export default OtherExperiencePage;
