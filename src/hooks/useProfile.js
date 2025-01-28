import { useState, useEffect } from 'react';

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
        setCanSave(isComplete && !emailError);
    };

    useEffect(() => {
        if (profile.email && !isValidEmail(profile.email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        checkIfCanSave();
    }, [profile]);

    const handleProfileChange = () => {
        return profile;
    };

    const handleProfileFieldChange = (field, value) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            [field]: value,
        }));
    };

    return { canSave, emailError, profile, handleProfileChange, handleProfileFieldChange };
};
