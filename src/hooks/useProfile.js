import { useState, useEffect } from 'react';

export const useProfile = (initialData) => {
    const [profile, setProfile] = useState(initialData);
    const [canSave, setCanSave] = useState();

    const checkIfCanSave = () => {
        const isValid = Object.values(profile).every((field) => field !== '');
        setCanSave(isValid);
    };

    useEffect(() => {
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

    return { canSave, profile, handleProfileChange, handleProfileFieldChange };
};
