import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { profileEmptyData } from '../data/profileData';
import { useNavigate } from 'react-router-dom';

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

export const useProfilePopup = () => {
    const { user, isLogin } = useAuthStore();
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin && !user?.name?.trim()) {
            setShowProfilePopup(true);
            setTimeout(() => {
                setShowProfilePopup(false);
                navigate('/profile');
            }, 1000);
        }
    }, [user, navigate]);

    return { showProfilePopup };
};
