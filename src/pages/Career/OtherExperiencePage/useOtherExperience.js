import { useCareerSummary } from '../../../hooks/useCareerSummary';

export const useOtherExperience = () => {
    return useCareerSummary({
        DataType: 'otherExperience',
        JobType: 'frontend',
        isTextTemplate: false,
    });
};
