import { useState, useEffect } from 'react';
import { SmartPlannerInitialData } from '../../data/smartTemplateData';
import { fetchPlanner, createPlanner, updatePlanner } from './smartPlannerApi';
import { useQuery,useQueryClient, useMutation } from '@tanstack/react-query';
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

export const useFetchPlanner = () => {
    return useQuery({
        queryKey: ['planner'],
        queryFn: fetchPlanner,
        staleTime: 1000 * 60 * 5,
    });
};

export const useCreatePlanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPlanner,
        onSuccess: () => {
            queryClient.invalidateQueries(['planner']);
        },
    });
};

export const useUpdatePlanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updatePlanner,
        onSuccess: () => {
            queryClient.invalidateQueries(['planner']);
        },
    });
};