export const educationLevel = [
    { label: '중학교 이하', value: 'MIDDLE' },
    { label: '고등학교', value: 'HIGH' },
    { label: '전문대학', value: 'JUNIOR_COLLEGE' },
    { label: '대학교', value: 'UNIVERSITY' },
    { label: '석사', value: 'MASTER' },
    { label: '박사', value: 'DOCTOR' },
];

export const educationStatus = [
    { label: '재학', value: 'ENROLLED' },
    { label: '휴학', value: 'ON_LEAVE' },
    { label: '졸업', value: 'GRADUATED' },
    { label: '수료', value: 'COMPLETED' },
];

export const jobData = [
    { label: '프론트엔드 개발자', id: 1 },
    { label: '백엔드 개발자', id: 2 },
    { label: 'PM(Product/Project Manager)', id: 3 },
    { label: 'Designer', id: 4 },
];

export const transformProfileData = (profile) => ({
    ...profile,
    educationLevel: educationLevel.find((item) => item.label === profile.educationLevel)?.value || '',
    educationStatus: educationStatus.find((item) => item.label === profile.educationStatus)?.value || '',
    job: jobData.find((item) => item.label === profile.job)?.id || '',
});

export const transformProfileResponse = (responseData) => ({
    ...responseData,
    educationLevel: responseData.educationLevel
        ? educationLevel.find((item) => item.value === responseData.educationLevel)?.label || ''
        : '',
    educationStatus: responseData.educationStatus
        ? educationStatus.find((item) => item.value === responseData.educationStatus)?.label || ''
        : '',
    job: responseData.job && responseData.job.name ? responseData.job.name : '',
});

export const sanitizeProfile = (profile) => {
    if (!profile) return { name: '', email: '', educationLevel: '', major: '', educationStatus: '', job: '' };
    return Object.fromEntries(Object.entries(profile).map(([key, value]) => [key, value ?? '']));
};
