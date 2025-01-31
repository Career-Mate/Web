import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const TEMP_TOKEN = import.meta.env.VITE_KOO_TOKEN;

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken") || TEMP_TOKEN;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
export default apiClient;
