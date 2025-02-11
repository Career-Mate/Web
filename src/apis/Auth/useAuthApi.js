import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authLogout } from './authApi';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authLogout,
        onSuccess: () => {
            logout();
            queryClient.removeQueries('profile');
            navigate('/');
        },
        onError: (error) => {
            console.error('React Query Error:', error);
        },
    });
};
