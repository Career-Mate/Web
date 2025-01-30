import { useState, useEffect } from 'react';
import { SmartPlannerInitialData } from '../data/smartTemplateData';
import { useUpdatePlanner } from '../apis/smartPlanner/useSmartPlannerApi';
import { mapPlannerDataToState, mapStateToPlannerData } from '../utils/smartPlanner/plannerMappers';

export const useSmartPlanner = () => {
    const [data, setData] = useState(SmartPlannerInitialData);
    const [canSave, setCanSave] = useState(false);
    const {mutate: updatePlanner} = useUpdatePlanner();
    // const updatedPlannerData = {
    //     activityName: '',
    //     startTime: '',
    //     endTime: '',
    //     specifics: '',
    //     measurable: '',
    //     achievable: '',
    //     relevant: '',
    //     timeBound: '',
    //     otherPlans: '',
    // };

    const checkIfCanSave = () => {
        const isValid = data.some((section) => {
            if (
                section.activityName === '' ||
                section.goalPeriod.startDate === null ||
                section.goalPeriod.endDate === null
            )
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
            setData([...data]);
            const updatedPlannerData = mapStateToPlannerData(data);
            updatePlanner(updatedPlannerData);
        }
    };

    return {
        data,
        setData,
        canSave,
        handleSave,
    };
};

export const usePlannerDataEffect = (isSuccess, planner, setData) => {
    useEffect(() => {
        if (isSuccess && planner) {
            const plannerData = planner?.data;
            setData((prevData) => mapPlannerDataToState(plannerData, prevData));
        }
    }, [isSuccess, planner, setData]);
};