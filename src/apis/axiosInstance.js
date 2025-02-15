import axios from 'axios';
import { refreshToken } from './Auth/authApi';
import { useAuthStore } from '../store/authStore';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const statusCode = error.response?.status;
        const errorCode = error.response?.data?.code;
        if (
            ((statusCode === 4001 && errorCode === 'ETK001') || (statusCode === 4003 && errorCode === 'ETK004')) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const success = await refreshToken();
            if (success) {
                return apiClient(originalRequest);
            } else {
                try {
                    const authState = useAuthStore.getState();
                    if (authState.isLogin) {
                        authState.logout();
                    }
                } catch (error) {
                    console.error('🔴 Zustand 로그아웃 오류:', error);
                }
                window.location.replace('/login');
            }
        }
        return Promise.reject(error);
    },
);

export default apiClient;
