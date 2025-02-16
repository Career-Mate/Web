import { useNavigate } from 'react-router-dom';
import TextTemplate from '../../../components/common/Templates/TextTemplate/TextTemplate';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import useTemplateData from '../../../hooks/useTemplateData';
import useProgressBar from '../../../hooks/useProgressBar';
import { useState } from 'react';
import MobileAccountPopup from '../../../components/common/Popups/MobileAccountPopup/MobileAccountPopup';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const FinalSummaryPage = ({ setActiveScreen }) => {
    const navigate = useNavigate();
    const { data, setData, handleSave, canSave } = useTemplateData('SUMMARY');
    const { progression, prevSummaryProgress } = useProgressBar(5);

    const handlePrevClick = () => {
        prevSummaryProgress();
        setActiveScreen(3);
    };

    const handleNextClick = () => {
        navigate('/career/success');
    };

    const [isPopup, setIsPopup] = useState(false);
    const handlePopupOpen = () => {
        setIsPopup(true);
    };
    const handlePopupClose = () => {
        setIsPopup(false);
    };

    const isMobileScreen = useIsMobileScreen();

    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.TitleGroup>
                    <S.Title>5. 최종 정리</S.Title>
                    <S.Subtitle>※ 최대 2개까지 작성할 수 있어요.</S.Subtitle>
                </S.TitleGroup>
                <ProgressBar progression={progression} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <TextTemplate pageType="SUMMARY" onDataChange={(updatedData) => setData(updatedData)} />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton
                    width="131px"
                    backgroundColor={'deepgreen'}
                    onClick={() => {
                        handleSave;
                        handlePopupOpen();
                    }}
                    disabled={!canSave}
                >
                    저장
                </SquareButton>
                <div>
                    <SquareButton width="131px" backgroundColor={'grey'} onClick={handlePrevClick}>
                        이전
                    </SquareButton>
                    <SquareButton width="131px" backgroundColor={'lightgreen'} onClick={handleNextClick}>
                        완료
                    </SquareButton>
                </div>
            </S.ButtonWrapper>
            {isPopup && isMobileScreen && (
                <MobileAccountPopup type={'저장 완료'} onCancel={handlePopupClose} onConfirm={handlePopupClose} />
            )}
        </S.PageWrapper>
    );
};

export default FinalSummaryPage;
