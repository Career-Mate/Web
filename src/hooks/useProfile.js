import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { profileEmptyData } from '../data/profileData';

export const useProfile = () => {
    const [profile, setProfile] = useState(profileEmptyData);
    const [canSave, setCanSave] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const { user } = useAuthStore();

    useEffect(() => {
        if (user) {
            setProfile(user);
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
