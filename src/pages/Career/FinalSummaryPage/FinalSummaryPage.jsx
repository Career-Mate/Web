import { useNavigate } from 'react-router-dom';
import TextTemplate from '../../../components/common/TextTemplate/TextTemplate';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import { useFinalSummary } from './useFinalSummary';
import useProgressBar from '../../../hooks/useProgressBar';

const FinalSummaryPage = ({ setActiveScreen }) => {
    const navigate = useNavigate();
    const { data, setData, handleSave } = useFinalSummary();
    const { progression, prevSummaryProgress } = useProgressBar(5);

    const handlePrevClick = () => {
        prevSummaryProgress();
        setActiveScreen(3);
    };

    const handleNextClick = () => {
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
                <TextTemplate data={data} onDataChange={(updatedData) => setData(updatedData)} />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton width="131px" backgroundColor={'deepgreen'} onClick={handleSave}>
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

export default FinalSummaryPage;
