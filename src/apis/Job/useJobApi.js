import { useQuery } from '@tanstack/react-query';
import { fetchRecommendJobs } from './JobApi';
import { mapRecommendJobData } from '../../utils/mapRecommendJobData';

const QUERY_KEY_RECOMMEND_JOBS = 'recommendJobs';

export const useFetchRecommendJobs = (page) => {
    return useQuery({
        queryKey: [QUERY_KEY_RECOMMEND_JOBS, page],
        queryFn: async () => {
            const apiData = await fetchRecommendJobs(page);
            return mapRecommendJobData(apiData);
        },
        staleTime: 1000 * 60 * 60 * 12,
        retry: false,
        onError: (error) => {
            console.error('useFetchRecommendJob error:', error);
        },
    });
};
