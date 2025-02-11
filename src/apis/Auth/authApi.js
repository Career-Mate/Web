import apiClient from '../axiosInstance';

export const authLogout = async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
};

export const refreshToken = async () => {
    try {
        const response = await apiClient.post('/auth/refresh');
        return response.status === 200;
    } catch (error) {
        console.error('🔴 Refresh 실패:', error);
        alert('토큰이 만료되었습니다. 다시 로그인해주세요.');
        return false;
    }
};
