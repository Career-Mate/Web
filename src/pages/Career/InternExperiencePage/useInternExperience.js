import { useCareerSummary } from '../../../hooks/useCareerSummary';

export const useInternExperience = () => {
    return useCareerSummary({
        DataType: 'internExperience',
        JobType: 'frontend',
        isTextTemplate: false,
    });
};
