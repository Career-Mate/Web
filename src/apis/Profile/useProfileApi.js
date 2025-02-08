import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteProfile, getProfile, modifyProfile, saveProfile } from './profileApi';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

export const useSaveProfile = (profile) => {
    const navigate = useNavigate();
    const { login } = useAuthStore();

    return useMutation({
        mutationFn: saveProfile,
        onSuccess: () => {
            login(profile);
            navigate('/profile/success');
        },
        onError: (error) => {
            alert('프로필 저장에 실패했습니다. 다시 시도해주세요.');
        },
    });
};

export const useEditProfile = () => {
    const { fetchUser } = useAuthStore();

    return useMutation({
        mutationFn: modifyProfile,
        onSuccess: (data) => {
            fetchUser(data);
        },
        onError: (error) => {
            alert('프로필 수정에 실패했습니다. 다시 시도해주세요.');
        },
    });
};

export const useFetchProfile = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        retry: 1,
    });
    return { data, isLoading, isError, error };
};

export const useDeleteProfile = () => {
    return useMutation({
        mutationFn: deleteProfile,
        onError: (error) => {
            alert('프로필 수정에 실패했습니다. 다시 시도해주세요.');
        },
    });
};
