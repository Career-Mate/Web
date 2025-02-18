import { useNavigate } from 'react-router-dom';
import TextTemplate from '../../../components/common/Templates/TextTemplate/TextTemplate';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import useTemplateData from '../../../hooks/useTemplateData';
import useProgressBar from '../../../hooks/useProgressBar';

const FinalSummaryPage = ({ setActiveScreen }) => {
    const navigate = useNavigate();
    const { data, setData, handleSave, canSave, handleAutoSave } = useTemplateData('SUMMARY');
    const { progression, prevSummaryProgress } = useProgressBar(5);
    const isAllTemplatesValid = useTemplateStore((state) => state.isAllTemplatesValid);

    const handlePrevClick = async () => {
        await handleAutoSave();
        prevSummaryProgress();
        setActiveScreen(3);
    };

    const handleNextClick = () => {
        if (!isAllTemplatesValid()) {
            alert('모든 페이지에서 최소 1개의 템플릿을 완성해야 완료할 수 있습니다.');
            return;
        }

        navigate('/career/success');
    };

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
                    width="120px"
                    height="50px"
                    fontSize="14px"
                    backgroundColor={'deepgreen'}
                    mobileWidth="340px"
                    mobileHeight="40px"
                    mobileFontSize="14px"
                    onClick={handleSave}
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
                        완료
                    </SquareButton>
                </div>
            </S.ButtonWrapper>
        </S.PageWrapper>
    );
};

export default FinalSummaryPage;
