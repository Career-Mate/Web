import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Template from '../../../components/common/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';
import { jobTemplateData } from '../../../components/common/UserTemplate/jobTemplateData';

const InternExperiencePage = () => {
    const initialData = jobTemplateData['internExperience']['frontend'];
    const [data, setData] = useState(initialData);
    const [canSave, setCanSave] = useState(false);
    const navigate = useNavigate();

    const checkIfCanSave = () => {
        const isValid = data.some((section) => {
            return section.items.slice(0, 4).every((item) => {
                if (item.type === 'date') {
                    return item.startDate !== null && item.endDate !== null;
                }
                return item.content.trim().length > 0;
            });
        });
        setCanSave(isValid);
    };

    useEffect(() => {
        checkIfCanSave();
    }, [data]);

    const handleSave = () => {
        console.log('Final data:', JSON.stringify(data, null, 2));
        if (!canSave) {
            alert('필수 항목을 모두 입력해주세요!');
        } else {
            alert('저장되었습니다.');
        }
    };

    const handleNext = () => {
        navigate('/project-experience');
    };

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
