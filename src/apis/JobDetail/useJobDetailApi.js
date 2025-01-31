import apiClient from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchDetail = async ({recruitId}) => {
    try {
        const response = await apiClient.get(`/recruits/${recruitId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching planner data:", error);
        throw error;
    }
};

export const useFetchDetail = (recruitId)=>{ 
    const {data, isFetching, isError} = useQuery({
        queryFn : ()=> fetchDetail({recruitId}),
        queryKey : ['detail',recruitId],
        cacheTime: 1000 * 60 * 5,
        staleTime : 1000 * 60 * 5,
        retry: false,
        onError: (error) => {
            console.error("React Query Error:", error);
        },
    })
    return {data, isFetching,isError}
}

