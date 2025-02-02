import apiClient from '../axiosInstance';

export const fetchRecommendJobs = async (page = 1, sortType = 'POSTING_DESC') => {
    try {
        const response = await apiClient.get('/recruits', {
            params: {
                page: page,
                size: 6,
                recruitSortType: sortType,
            },
        });

        return response.data;
    } catch (error) {
        console.error('fetch job error: ', error);
        throw error;
    }
};
