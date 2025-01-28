import { useState, useEffect } from 'react';
import { educationLevel, educationStatus, jobData } from '../data/profileData';

export const useProfile = (initialData) => {
    const [profile, setProfile] = useState(initialData);
    const [canSave, setCanSave] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const checkIfCanSave = () => {
        const isComplete = Object.entries(profile).every(([key, value]) => value.trim() !== '');
        const isEmail = isValidEmail(profile.email);
        setCanSave(isComplete);
        setEmailError(!isEmail);
    };

    useEffect(() => {
        checkIfCanSave();
    }, [profile]);

    const handleProfileChange = () => {
        const transformProfile = {
            ...profile,
            educationLevel: educationLevel.find((item) => item.label === profile.educationLevel)?.value || '',
            educationStatus: educationStatus.find((item) => item.label === profile.educationStatus)?.value || '',
            job: jobData.find((item) => item.label === profile.job)?.id || '',
        };

        return transformProfile;
    };

    const handleProfileFieldChange = (field, value) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            [field]: value,
        }));
    };

    return { canSave, emailError, profile, handleProfileChange, handleProfileFieldChange };
};
