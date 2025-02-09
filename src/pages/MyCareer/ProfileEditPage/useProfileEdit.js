import { useProfile } from '../../../hooks/useProfile';
import { useEditProfile, useDeleteProfile } from '../../../apis/Profile/useProfileApi';
import { useState } from 'react';
import { useAuthStore } from '../../../store/authStore';
import { useNavigate } from 'react-router-dom';

export const useProfileEdit = () => {
    const { canSave, emailError, profile, handleProfileFieldChange } = useProfile();
    const { mutate: modifyProfile } = useEditProfile(profile);

    const handleSave = () => {
        if (!canSave) {
            alert('항목을 모두 입력해주세요!');
            return;
        }

        if (emailError) {
            alert('유효한 이메일 주소를 입력하세요.');
            return;
        }

        modifyProfile(profile);
    };

    return { profile, handleProfileFieldChange, handleSave };
};

export const useDeleteAccount = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { logout } = useAuthStore();
    const { mutate: deleteProfile } = useDeleteProfile();
    const navigate = useNavigate();

    const handleDeleteUser = () => {
        setIsDeleting(true);
        deleteProfile();
        setTimeout(() => {
            logout();
            navigate('/');
        }, 200);
    };

    return { isDeleting, handleDeleteUser };
};
