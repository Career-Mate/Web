import axios from 'axios';

const SERVER_URL = 'http://54.180.29.116:8080';

export const fetchPlanner = async () => {
    const response = await axios.get(`${SERVER_URL}/planner`);
    return response.data;
};

export const createPlanner = async (plannerData) => {
    const response = await axios.post(`${SERVER_URL}/planner`, plannerData);
    return response.data;
};

export const updatePlanner = async (updatedPlannerData) => {
    const response = await axios.patch(`${SERVER_URL}/planner`, updatedPlannerData);
    return response.data;
};
