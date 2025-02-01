import { useMutation, useQuery } from '@tanstack/react-query';
import { getProfile, modifyProfile, saveProfile } from '../../apis/profile/profileApi';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

export const useSaveProfile = () => {
    const navigate = useNavigate();
    const { fetchUser } = useAuthStore();

    return useMutation({
        mutationFn: saveProfile,
        onSuccess: (data) => {
            fetchUser(data);
            navigate('/profile/success');
        },
        onError: (error) => {
            alert('프로필 저장에 실패했습니다. 다시 시도해주세요.');
            console.error(error);
        },
    });
};

export const useEditProfile = (profile) => {
    const { fetchUser } = useAuthStore();

    return useMutation({
        mutationFn: modifyProfile,
        onSuccess: () => {
            fetchUser(profile);
        },
        onError: (error) => {
            console.error(error);
        },
    });
};

export const useFetchProfile = () => {
    const { fetchUser } = useAuthStore();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        onSuccess: (data) => {
            fetchUser(data);
        },
    });
    return { data, isLoading, isError, error };
};
