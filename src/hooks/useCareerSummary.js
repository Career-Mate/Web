import { useState, useEffect } from 'react';
import { jobTemplateData } from '../data/jobTemplateData';
import { textTemplateData } from '../data/textTemplateData';

export const useCareerSummary = ({
    DataType,
    JobType,
    isTextTemplate = false,
    skipValidation = false,
    alertMessage = '필수 항목을 모두 입력해주세요!',
}) => {
    const initialData = isTextTemplate ? textTemplateData[DataType][JobType] : jobTemplateData[DataType][JobType];
    const [data, setData] = useState(initialData);
    const [canSave, setCanSave] = useState(false);

    const checkIfCanSave = () => {
        if (skipValidation) {
            setCanSave(true);
            return;
        }

        const isValid = data.some((section) =>
            section.items.slice(0, 4).every((item) => {
                if (!isTextTemplate && item.type === 'date') {
                    return item.startDate !== null && item.endDate !== null;
                }
                return item.content.trim().length > 0;
            }),
        );
        setCanSave(isValid);
    };

    useEffect(() => {
        checkIfCanSave();
    }, [data]);

    const handleSave = () => {
        if (!canSave) {
            alert(alertMessage);
        } else {
            alert('저장되었습니다.');
            setData([...data]);
        }
    };

    return {
        data,
        setData,
        canSave,
        handleSave,
    };
};
