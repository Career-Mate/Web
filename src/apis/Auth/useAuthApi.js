import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authLogout } from './AuthApi';
import { useAuthStore } from '../../store/authStore';

export const useLogout = () => {
    const { logout } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authLogout,
        onSuccess: () => {
            logout();
            queryClient.removeQueries('profile');
        },
        onError: (error) => {
            console.error('React Query Error:', error);
        },
    });
};
