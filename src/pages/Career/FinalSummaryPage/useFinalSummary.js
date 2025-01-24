import { useCareerSummary } from '../../../hooks/useCareerSummary';

export const useFinalSummary = () => {
    return useCareerSummary({
        DataType: 'summary',
        JobType: 'frontend',
        isTextTemplate: true,
        skipValidation: true,
    });
};
