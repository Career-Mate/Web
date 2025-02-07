import apiClient from '../../axiosInstance';

export const postScrapJob = async (jobId) => {
    try {
        const response = await apiClient.post(`/scrap/recruits/${jobId}`);
        return response.data;
    } catch (error) {
        console.error('post scrap job error:', error);
        throw error;
    }
};

export const deleteScrapJob = async (jobId) => {
    try {
        const response = await apiClient.delete(`/scrap/recruits/${jobId}`);
        return response.data;
    } catch (error) {
        console.error('delete scrap job error:', error);
        throw error;
    }
};

export const getScrapJobs = async () => {
    try {
        const response = await apiClient.get('/scrap/recruits');
        return response.data?.data || [];
    } catch (error) {
        console.error('get scrap jobs error:', error);
        throw error;
    }
};
