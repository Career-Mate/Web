import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authLogout } from './AuthApi';

export const useLogout = () => {
    const { logout } = useAuthStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authLogout,
        onSuccess: () => {
            logout();
            queryClient.removeQueries('profile');
        },
    });
};
