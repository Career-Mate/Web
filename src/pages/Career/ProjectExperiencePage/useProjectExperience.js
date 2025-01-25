import { useCareerSummary } from '../../../hooks/useCareerSummary';

export const useProjectExperience = () => {
    return useCareerSummary({
        DataType: 'projectExperience',
        JobType: 'frontend',
        isTextTemplate: false,
    });
};
