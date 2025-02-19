import Template from '../../../components/common/Templates/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import useTemplateData from '../../../hooks/useTemplateData';
import useProgressBar from '../../../hooks/useProgressBar';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';
import MobileAccountPopup from '../../../components/common/Popups/MobileAccountPopup/MobileAccountPopup';

const ProjectExperiencePage = ({ setActiveScreen }) => {
    const { data, setData, canSave, handleSave, isPopup, handlePopupClose, handleAutoSave } =
        useTemplateData('PROJECT_EXPERIENCE');
    const { progression, prevSummaryProgress, nextSummaryProgress } = useProgressBar(2);
    const isMobileScreen = useIsMobileScreen();

    const handlePrevClick = async () => {
        await handleAutoSave();
        prevSummaryProgress();
        setActiveScreen(0);
    };

    const handleNextClick = async () => {
        await handleAutoSave();
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
                <ProgressBar progression={progression} onClickRectangle={setActiveScreen} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <Template pageType="PROJECT_EXPERIENCE" onDataChange={(updatedData) => setData(updatedData)} />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton
                    width="120px"
                    height="50px"
                    fontSize="14px"
                    backgroundColor={'deepgreen'}
                    mobileWidth="340px"
                    mobileHeight="40px"
                    mobileFontSize="14px"
                    onClick={() => handleSave(isMobileScreen)}
                    disabled={!canSave}
                >
                    저장
                </SquareButton>
                <div>
                    <SquareButton
                        width="120px"
                        height="50px"
                        fontSize="14px"
                        backgroundColor={'grey'}
                        mobileWidth="180px"
                        mobileHeight="40px"
                        mobileFontSize="14px"
                        onClick={handlePrevClick}
                    >
                        이전
                    </SquareButton>
                    <SquareButton
                        width="120px"
                        height="50px"
                        fontSize="14px"
                        backgroundColor={'lightgreen'}
                        mobileWidth="180px"
                        mobileHeight="40px"
                        mobileFontSize="14px"
                        onClick={handleNextClick}
                    >
                        다음
                    </SquareButton>
                </div>
            </S.ButtonWrapper>
            {isPopup && isMobileScreen && (
                <MobileAccountPopup type={'저장 완료'} onCancel={handlePopupClose} onConfirm={handlePopupClose} />
            )}
        </S.PageWrapper>
    );
};

export default ProjectExperiencePage;
