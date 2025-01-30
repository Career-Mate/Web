import apiClient from "../axiosInstance";

export const fetchPlanner = async () => {
    const response = await apiClient.get("/planner");
    return response.data;
};

export const createPlanner = async (plannerData) => {
    const response = await apiClient.post("/planner", plannerData);
    return response.data;
};

export const updatePlanner = async (updatedPlannerData) => {
    const response = await apiClient.patch("/planner", updatedPlannerData);
    return response.data;
};
