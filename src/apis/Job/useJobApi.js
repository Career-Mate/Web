import { useQuery } from '@tanstack/react-query';
import { fetchRecommendJobs } from './JobApi';
import { mapRecommendJobData } from '../../utils/mapRecommendJobData';

const QUERY_KEY_RECOMMEND_JOBS = 'recommendJobs';

export const useFetchRecommendJobs = (page, sortType) => {
    return useQuery({
        queryKey: [QUERY_KEY_RECOMMEND_JOBS, page, sortType],
        queryFn: async () => {
            const apiData = await fetchRecommendJobs(page, sortType);
            return mapRecommendJobData(apiData);
        },
        staleTime: 1000 * 60 * 5,
        retry: false,
        onError: (error) => {
            console.error('useFetchRecommendJobs error:', error);
        },
    });
};
