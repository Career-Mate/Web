import { fetchPlanner, createPlanner, updatePlanner } from './SmartPlannerApi';
import { useQuery,useQueryClient, useMutation } from '@tanstack/react-query';

export const useFetchPlanner = () => {
    return useQuery({
        queryKey: ['planner'],
        queryFn: fetchPlanner,
        staleTime: 1000 * 60 * 5,
    });
};

export const useCreatePlanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPlanner,
        onSuccess: () => {
            queryClient.invalidateQueries(['planner']);
        },
    });
};

export const useUpdatePlanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updatePlanner,
        onSuccess: () => {
            queryClient.invalidateQueries(['planner']);
        },
    });
};