import apiClient from '../../axiosInstance';
import { mapRecommendContentData } from '../../../utils/mapRecommendContentData';

export const postScrapContent = async (contentId) => {
    try {
        const response = await apiClient.post(`/content/${contentId}/scrap`);
        return response.data;
    } catch (error) {
        console.error('post scrap content error:', error);
        throw error;
    }
};

export const deleteScrapContent = async (contentId) => {
    try {
        const response = await apiClient.delete(`/content/${contentId}/scrap`);
        return response.data;
    } catch (error) {
        console.error('delete scrap content error:', error);
        throw error;
    }
};

export const getScrapContent = async () => {
    try {
        const response = await apiClient.get('/content/scrap');
        return response.data;
    } catch (error) {
        console.error('get scrap contents error:', error);
        throw error;
    }
};
