import { useNavigate } from 'react-router-dom';
import Template from '../../../components/common/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import useTemplateData from '../../../hooks/useTemplateData';
import { jobTemplateData } from '../../../components/common/UserTemplate/jobTemplateData';
import * as S from './styled/styled';

const InternExperiencePage = () => {
    const navigate = useNavigate();
    const {
        data: frontendData1,
        handleInputChange: handleInputChange1,
        handleDateChange: handleDateChange1,
    } = useTemplateData(jobTemplateData.internExperience.frontend);
    const {
        data: frontendData2,
        handleInputChange: handleInputChange2,
        handleDateChange: handleDateChange2,
    } = useTemplateData(jobTemplateData.internExperience.frontend);
    const isValid = () => {
        const isTemplateValid = (data) =>
            data.some((section) =>
                section.items.slice(0, 4).every((item) => {
                    if (item.type === 'date') {
                        return item.startDate && item.endDate;
                    }
                    return item.content && item.content.trim() !== '';
                }),
            );
        const isFrontend1Valid = isTemplateValid(frontendData1);
        const isFrontend2Valid = isTemplateValid(frontendData2);
        return isFrontend1Valid || isFrontend2Valid;
    };
    const handleSave = () => {
        if (!isValid()) {
            alert('템플릿 중 하나라도 1~4번째 행이 모두 입력되어야 합니다!');
            return;
        }
        console.log('저장된 데이터 (템플릿1):', frontendData1);
        console.log('저장된 데이터 (템플릿2):', frontendData2);
        alert('저장되었습니다!');
    };
    const handleNext = () => {
        if (!isValid()) {
            alert('템플릿 중 하나라도 1~4번째 행이 모두 입력되어야 합니다!');
            return;
        }
        navigate('/project-experience');
    };
    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.Title>1. 인턴 경험</S.Title>
                <ProgressBar progression={1} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <Template data={frontendData1} onInputChange={handleInputChange1} onDateChange={handleDateChange1} />
            </S.TemplateWrapper>
            <S.TemplateWrapper>
                <Template data={frontendData2} onInputChange={handleInputChange2} onDateChange={handleDateChange2} />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton width="131px" backgroundColor={'deepgreen'} onClick={handleSave}>
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