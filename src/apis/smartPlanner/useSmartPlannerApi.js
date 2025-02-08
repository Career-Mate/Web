import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { fetchPlanner, createPlanner, updatePlanner } from "./SmartPlannerApi";

const QUERY_KEY_PLANNER = "planner";

export const useFetchPlanner = () => {
    return useQuery({
        queryKey: ["planner"],
        queryFn: fetchPlanner,
        staleTime: 1000 * 60 * 5,
        retry: false,
        onError: (error) => {
            console.error("React Query Error:", error);
        },
    });
};

export const useCreatePlanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPlanner,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY_PLANNER]);
            console.log("플래너 생성");
        },
        onError: (error) => {
            console.error("Error creating planner:", error.message);
            alert("플래너 생성 중 오류가 발생했습니다.");
        },
    });
};

export const useUpdatePlanner = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updatePlanner,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY_PLANNER]);
            alert("플래너가 성공적으로 업데이트되었습니다.");
            window.location.reload();
            window.scrollTo(0, 0);
        },
        onError: (error) => {
            console.error("Error updating planner:", error.message);
            alert("플래너 업데이트 중 오류가 발생했습니다.");
        },
    });
};
