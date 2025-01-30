import axios from 'axios';
import { educationLevel, educationStatus, jobData } from '../data/profileData';

const API_BASE_URL = import.meta.env.VITE_BACK_URL;

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
    const response = await axios.post(`${API_BASE_URL}/member/profile`, transformData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const modifyProfile = async (profile) => {
    const transformData = transformProfileData(profile);
    console.log(transformData);
    const response = await axios.patch(`${API_BASE_URL}/member/modify`, transformData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const getProfile = async () => {
    const response = await axios.get(`${API_BASE_URL}/member`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const transformedData = transformProfileResponse(response.data);
    return transformedData;
};
