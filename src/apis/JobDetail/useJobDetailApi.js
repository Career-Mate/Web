import apiClient from '../axiosInstance';
import { useQuery } from '@tanstack/react-query';

const fetchDetail = async ({ recruitId }) => {
    const response = await apiClient.get(`/recruits/${recruitId}`);
    return response.data;
};

export const useFetchDetail = (recruitId) => {
    const { data, isFetching, isLoading, isError } = useQuery({
        queryFn: () => fetchDetail({ recruitId }),
        queryKey: ['detail', recruitId],
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 5,
        onError: (error) => {
            console.error('React Query Error:', error);
        },
    });
    return { data, isFetching, isLoading, isError };
};
