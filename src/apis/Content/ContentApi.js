import apiClient from '../axiosInstance';
import { mapRecommendContentData } from '../../utils/mapRecommendContentData';

export const getContents = async () => {
    const response = await apiClient.get('/content');
    return mapRecommendContentData(response.data);
};
