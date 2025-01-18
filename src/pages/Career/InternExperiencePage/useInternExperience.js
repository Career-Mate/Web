import { useState, useEffect } from 'react';
import { jobTemplateData } from '../../../data/jobTemplateData';

export const useInternExperience = () => {
    const initialData = jobTemplateData['internExperience']['frontend'];
    const [data, setData] = useState(initialData);
    const [canSave, setCanSave] = useState(false);

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

    return {
        data,
        setData,
        canSave,
        handleSave,
    };
};
