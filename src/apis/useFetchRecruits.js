import apiClient from "./axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchRecruits = async ({page,size,sortType}) => {
    try {
        const response = await apiClient.get(`/recruits?page=${page}&size=${size}&recruitSortType=${sortType}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching planner data:", error);
        throw error;
    }
};

export const useFetchRecruits = (page,size,sortType)=>{ 
    const {data, isFetching, isError} = useQuery({
        queryFn : ()=> fetchRecruits({page,size,sortType}),
        queryKey : ['Recruits',page,size,sortType],
        cacheTime: 1000 * 60 * 5,
        staleTime : 1000 * 60 * 5,
        onError: (error) => {
            console.error("React Query Error:", error);
        },
    })
    return {data, isFetching,isError}
}