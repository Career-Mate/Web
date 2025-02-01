import apiClient from '../axiosInstance';

export const fetchRecommendJobs = async (page = 1) => {
    try {
        const response = await apiClient.get('/recruits', {
            params: { page },
        });
        return response.data;
    } catch (error) {
        console.error('fetch job error: ', error);
        throw error;
    }
};
