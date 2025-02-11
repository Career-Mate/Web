import axios from 'axios';
import { refreshToken } from './Auth/AuthApi';
import { useHandleLogout } from './Auth/useHandleLogout';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TEMP_TOKEN = import.meta.env.VITE_TEMP_TOKEN;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: TEMP_TOKEN,
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const statusCode = error.response?.status;
        const errorCode = error.response?.code;
        const handleLogout = useHandleLogout();
        if (
            ((statusCode === 4001 && errorCode === 'ETK001') || (statusCode === 4003 && errorCode === 'ETK004')) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const success = await refreshToken();
            if (success) {
                return apiClient(originalRequest);
            } else {
                handleLogout();
            }
        }
        return Promise.reject(error);
    },
);

export default apiClient;
