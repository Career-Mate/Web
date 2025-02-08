import apiClient from '../axiosInstance';
import { transformProfileData, transformProfileResponse } from '../../utils/Profile/ProfileMapper';

export const saveProfile = async (profile) => {
    const transformData = transformProfileData(profile);
    const response = await apiClient.post('/member/profile', transformData);
    return transformProfileResponse(response.data.data);
};

export const modifyProfile = async (profile) => {
    const transformData = transformProfileData(profile);
    const response = await apiClient.patch('/member/modify', transformData);
    return transformProfileResponse(response.data.data);
};

export const getProfile = async () => {
    const response = await apiClient.get('/member');
    const transformedData = transformProfileResponse(response.data.data);
    return transformedData;
};

export const deleteProfile = async () => {
    const response = await apiClient.patch('/member/delete');
    return response.data;
};
