import apiClient from '../axiosInstance';

export const authLogout = async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
};
