import { useQuery } from '@tanstack/react-query';
import { fetchRecommendJobs } from './JobApi';
import { mapRecommendJobData } from '../../utils/mapRecommendJobData';

const QUERY_KEY_RECOMMEND_JOBS = 'recommendJobs';

export const useFetchRecommendJobs = (page, sortType) => {
    return useQuery({
        queryKey: [QUERY_KEY_RECOMMEND_JOBS, page, sortType],
        queryFn: async () => {
            console.log('page: ', page, 'sortType: ', sortType);
            const apiData = await fetchRecommendJobs(page, sortType);
            console.log('api data:', apiData);

            const mappedData = mapRecommendJobData(apiData);
            console.log('📢 매핑된 데이터:', mappedData);

            return mappedData;
        },
        staleTime: 1000 * 60 * 5,
        retry: false,
        onError: (error) => {
            console.error('useFetchRecommendJob error:', error);
        },
    });
};
