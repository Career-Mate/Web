import apiClient from '../axiosInstance';
import { mapRecommendContentData } from '../../utils/mapRecommendContentData';

export const fetchContents = async () => {
    try {
        const response = await apiClient.get('/content');
        return mapRecommendContentData(response.data);
    } catch (error) {
        console.error('fetch content error: ', error);
        throw error;
    }
};
