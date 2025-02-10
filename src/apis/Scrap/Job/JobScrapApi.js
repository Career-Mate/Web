import apiClient from '../../axiosInstance';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const postScrapJob = async (jobId) => {
    const response = await apiClient.post(`/scrap/recruits/${jobId}`);
    return response.data;
};

export const deleteScrapJob = async (jobId) => {
    const response = await apiClient.delete(`/scrap/recruits/${jobId}`);
    return response.data;
};

export const getScrapJobs = async () => {
    const response = await apiClient.get('/scrap/recruits');
    return response.data?.data || [];
};

export const usePostScrapJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postScrapJob,
        onSuccess: () => {
            queryClient.invalidateQueries(['scrapJobs']);
        },
        onError: (error) => {
            console.error('use post scrap job error:', error);
        },
    });
};

export const useDeleteScrapJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteScrapJob,
        onSuccess: () => {
            queryClient.invalidateQueries(['scrapJos']);
        },
        onError: () => {
            console.error('use delete scrap job error:', error);
        },
    });
};

export const useGetScrapJobs = () => {
    return useQuery({
        queryKey: ['scrapJobs'],
        queryFn: getScrapJobs,
        retry: false,
        onError: (error) => {
            console.error('use get scrap jobs error:', error);
        },
    });
};
