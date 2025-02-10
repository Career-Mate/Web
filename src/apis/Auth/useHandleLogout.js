import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../../store/authStore';

export const useHandleLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { logout } = useAuthStore();

    return () => {
        logout();
        queryClient.removeQueries('profile');
        navigate('/');
    };
};
