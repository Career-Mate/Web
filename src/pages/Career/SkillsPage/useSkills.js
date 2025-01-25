import { useCareerSummary } from '../../../hooks/useCareerSummary';

export const useSkills = () => {
    return useCareerSummary({
        DataType: 'skills',
        JobType: 'frontend',
        isTextTemplate: true,
        alertMessage: '항목을 모두 입력해주세요!',
    });
};
