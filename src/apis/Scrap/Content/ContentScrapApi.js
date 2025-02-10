import apiClient from '../../axiosInstance';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const postScrapContent = async (contentId) => {
    const response = await apiClient.post(`/content/${contentId}/scrap`);
    return response.data;
};

export const deleteScrapContent = async (contentId) => {
    const response = await apiClient.delete(`/content/${contentId}/scrap`);
    return response.data;
};

export const getScrapContents = async () => {
    const response = await apiClient.get('/content/scrap');
    return response.data?.data?.result || [];
};

export const usePostScrapContent = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postScrapContent,
        onSuccess: () => {
            queryClient.invalidateQueries(['scrapContents']);
        },
        onError: (error) => {
            console.error('user post scrap content error:', error);
        },
    });
};

export const useDeleteScrapContent = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteScrapContent,
        onSuccess: () => {
            queryClient.invalidateQueries(['scrapContents']);
        },
        onError: (error) => {
            console.error('use delete scrap content error:', error);
        },
    });
};

export const useGetScrapContents = () => {
    return useQuery({
        queryKey: ['scrapContents'],
        queryFn: getScrapContents,
        retry: false,
        onError: (error) => {
            console.error('use get scrap content error:', error);
        },
    });
};
