import { educationLevel, educationStatus, jobData } from '../data/profileData';
import apiClient from './axiosInstance';

const transformProfileData = (profile) => ({
    ...profile,
    educationLevel: educationLevel.find((item) => item.label === profile.educationLevel)?.value || '',
    educationStatus: educationStatus.find((item) => item.label === profile.educationStatus)?.value || '',
    job: jobData.find((item) => item.label === profile.job)?.id || '',
});

const transformProfileResponse = (responseData) => ({
    ...responseData,
    educationLevel: educationLevel.find((item) => item.value === responseData.educationLevel)?.label || '',
    educationStatus: educationStatus.find((item) => item.value === responseData.educationStatus)?.label || '',
    job: jobData.find((item) => item.id === responseData.job)?.label || '',
});

export const saveProfile = async (profile) => {
    const transformData = transformProfileData(profile);
    console.log(transformData);
    const response = await apiClient.post('/member/profile', transformData);
    return response.data;
};

export const modifyProfile = async (profile) => {
    const transformData = transformProfileData(profile);
    console.log(transformData);
    const response = await apiClient.patch('/member/modify', transformData);
    return response.data;
};

export const getProfile = async () => {
    const response = await apiClient.get('/member');
    const transformedData = transformProfileResponse(response.data);
    return transformedData;
};
