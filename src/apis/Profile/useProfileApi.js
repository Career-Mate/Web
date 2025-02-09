import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

export const useEditProfile = (profile) => {
    const { fetchUser } = useAuthStore();

    return useMutation({
        mutationFn: modifyProfile,
        onSuccess: () => {
            fetchUser(profile);
            alert('프로필이 수정되었습니다.');
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
        retry: 0,
    });
    return { data, isLoading, isError, error };
};

export const useDeleteProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProfile,
        onSuccess: () => {
            queryClient.removeQueries('profile');
        },
        onError: (error) => {
            alert('프로필 삭제에 실패했습니다. 다시 시도해주세요.');
        },
    });
};
