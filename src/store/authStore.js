import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { sanitizeProfile } from '../utils/Profile/ProfileMapper';
import { profileEmptyData } from '../data/profileData';

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
