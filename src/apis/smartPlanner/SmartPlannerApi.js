import apiClient from "../axiosInstance";

export const fetchPlanner = async () => {
    try {
        const response = await apiClient.get("/planner");
        return response.data;
    } catch (error) {
        console.error("Error fetching planner data:", error);
        throw error;
    }
};

export const createPlanner = async (plannerData) => {
    try {
        const response = await apiClient.post("/planner", plannerData);
        return response.data;
    } catch (error) {
        console.error("Error creating planner:", error);
        throw new Error(error.response?.data?.message || "Failed to create planner");
    }
};

export const updatePlanner = async (updatedPlannerData) => {
    try {
        const response = await apiClient.patch("/planner", updatedPlannerData);
        return response.data;
    } catch (error) {
        console.error("Error updating planner:", error);
        throw new Error(error.response?.data?.message || "Failed to update planner");
    }
};
