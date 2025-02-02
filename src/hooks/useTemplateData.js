import { useEffect } from 'react';
import { useTemplateStore } from '../store/useTemplateStore';
import { useJobStore } from '../store/useJobStore';

export const useTemplateData = (templateType) => {
    const { data, isLoading, isError, fetchTemplateData, handleInputChange, handleDateChange } = useTemplateStore();
    const jobType = useJobStore((state) => state.jobType);

    useEffect(() => {
        if (jobType) {
            fetchTemplateData(templateType, jobType);
        }
    }, [templateType, jobType, fetchTemplateData]);

    return {
        data,
        handleInputChange,
        handleDateChange,
        isLoading,
        isError,
    };
};

export default useTemplateData;
