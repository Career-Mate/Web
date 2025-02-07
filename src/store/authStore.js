import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { sanitizeProfile } from '../utils/Profile/ProfileMapper';
import { profileEmptyData } from '../data/profileData';
import { useQueryClient } from '@tanstack/react-query';

export const useAuthStore = create(
    persist(
        (set) => ({
            isLogin: false,
            user: profileEmptyData,
            login: (userData) =>
                set({
                    isLogin: true,
                    user: sanitizeProfile(userData),
                }),
            logout: () => {
                set({
                    isLogin: false,
                    user: profileEmptyData,
                }),
                    sessionStorage.removeItem('authStorage');
                const queryClient = useQueryClient();
                queryClient.removeQueries('profile');
            },
            fetchUser: (userData) =>
                set({
                    user: sanitizeProfile(userData),
                }),
        }),
        {
            name: 'authStorage',
        },
    ),
);
