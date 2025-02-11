import apiClient from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { mapRecommendContentData } from '../../utils/mapRecommendContentData';

export const getRecommendContents = async () => {
    const response = await apiClient.get('/content');
    return response.data;
};

export const useGetRecommendContents = () => {
    return useQuery({
        queryKey: ['contents'],
        queryFn: async () => {
            const apiData = await getRecommendContents();
            return mapRecommendContentData(apiData);
        },
        retry: false,
        onError: (error) => {
            console.error('use get recommend contents error:', error);
        },
    });
};
