import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { profileEmptyData } from '../data/profileData';

const sanitizeProfile = (profile) => {
    if (!profile) return profileEmptyData;
    return Object.fromEntries(Object.entries(profile).map(([key, value]) => [key, value ?? '']));
};

export const useProfile = () => {
    const [profile, setProfile] = useState(profileEmptyData);
    const [canSave, setCanSave] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const { user } = useAuthStore();

    useEffect(() => {
        if (user) {
            console.log(sanitizeProfile(user));
            setProfile(sanitizeProfile(user));
        }
    }, [user]);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const checkIfCanSave = () => {
        const isComplete = Object.entries(profile).every(([key, value]) => {
            return typeof value === 'string' && value.trim() !== '';
        });
        const isEmail = isValidEmail(profile.email);
        setCanSave(isComplete);
        setEmailError(!isEmail);
    };

    useEffect(() => {
        checkIfCanSave();
    }, [profile]);

    const handleProfileFieldChange = (field, value) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            [field]: value,
        }));
    };

    return { canSave, emailError, profile, handleProfileFieldChange };
};
