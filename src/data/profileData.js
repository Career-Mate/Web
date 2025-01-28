export const profileInitialData = {
    name: '김단아',
    email: 'test@email.com',
    educationLevel: '대학교',
    major: '컴퓨터공학과',
    educationStatus: '재학',
    job: '프론트엔드 개발자',
};

export const profileEmptyData = {
    name: '',
    email: '',
    educationLevel: '',
    major: '',
    educationStatus: '',
    job: '',
};

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
