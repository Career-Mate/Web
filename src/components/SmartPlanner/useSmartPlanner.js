import { useState, useEffect } from 'react';
import { SmartPlannerInitialData } from '../../data/smartTemplateData';
export const useSmartPlanner = () => {
    const [data, setData] = useState(SmartPlannerInitialData);
    const [canSave, setCanSave] = useState(false);

    const checkIfCanSave = () => {
        const isValid = data.some((section) => {
            if(section.activityName === "" || section.goalPeriod.startDate === null || section.goalPeriod.endDate === null)
                return false;
            return section.items.slice(0, 5).every((item) => {
                return item.content.trim().length > 0;
            });
        });
        setCanSave(isValid);
    };

    useEffect(() => {
        checkIfCanSave();
    }, [data]);

    const handleSave = () => {
        if (!canSave) {
            alert('항목을 모두 입력해주세요!');
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
