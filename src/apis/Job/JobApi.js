import apiClient from '../axiosInstance';
import { mapRecommendJobData } from '../../utils/mapRecommendJobData';

export const getRecommendJobs = async (page = 1, sortType = 'POSTING_DESC') => {
    const response = await apiClient.get('/recruits', {
        params: {
            page,
            size: 6,
            recruitSortType: sortType,
        },
    });
    console.log('hi:', mapRecommendJobData(response.data));
    return mapRecommendJobData(response.data);
};
