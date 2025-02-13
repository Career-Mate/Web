import apiClient from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { mapRecommendJobData } from '../../utils/mapRecommendJobData';

export const getRecommendJobs = async (page = 1, sortType = 'POSTING_DESC') => {
    const response = await apiClient.get('/recruits', {
        params: {
            page,
            size: 6,
            recruitSortType: sortType,
        },
    });

    return response.data;
};

export const useGetRecommendJobs = (page, sortType) => {
    return useQuery({
        queryKey: ['recommendJobs', page, sortType],
        queryFn: async () => {
            const apiData = await getRecommendJobs(page, sortType);
            return mapRecommendJobData(apiData);
        },
        retry: false,
        onError: (error) => {
            console.error('use get recommend jobs error:', error);
        },
    });
};
