import Template from '../../../components/common/Templates/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import useTemplateData from '../../../hooks/useTemplateData';
import useProgressBar from '../../../hooks/useProgressBar';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';
import MobileAccountPopup from '../../../components/common/Popups/MobileAccountPopup/MobileAccountPopup';

const InternExperiencePage = ({ setActiveScreen }) => {
    const { data, setData, canSave, handleSave, isPopup, handlePopupClose } = useTemplateData('INTERN_EXPERIENCE');
    const { progression, nextSummaryProgress } = useProgressBar(1);
    const isMobileScreen = useIsMobileScreen();

    const handleNextClick = () => {
        nextSummaryProgress();
        setActiveScreen(1);
    };

    const handleSaveClick = () => {
        handleSave(isMobileScreen);
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
                <SquareButton width="131px" backgroundColor={'deepgreen'} onClick={handleSaveClick} disabled={!canSave}>
                    저장
                </SquareButton>
                <SquareButton width="131px" backgroundColor={'lightgreen'} onClick={handleNextClick}>
                    다음
                </SquareButton>
            </S.ButtonWrapper>

            {isPopup && isMobileScreen && (
                <MobileAccountPopup type={'저장 완료'} onCancel={handlePopupClose} onConfirm={handlePopupClose} />
            )}
        </S.PageWrapper>
    );
};

export default InternExperiencePage;
