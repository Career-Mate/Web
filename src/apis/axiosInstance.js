import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TEMP_TOKEN = import.meta.env.VITE_TEMP_TOKEN;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: TEMP_TOKEN,
    },
});
export default apiClient;