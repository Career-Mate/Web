import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { sanitizeProfile } from '../utils/Profile/ProfileMapper';
import { profileEmptyData } from '../data/profileData';

const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === name) return decodeURIComponent(value);
    }
    return null;
};

export const useAuthStore = create(
    persist(
        (set) => ({
            isLogin: false,
            user: profileEmptyData,

            logout: () => {
                set({ isLogin: false, user: profileEmptyData });
                sessionStorage.removeItem('authStorage');
            },

            checkAuth: () => {
                const token = getCookie('access-token');
                if (token) {
                    set({ isLogin: true });
                } else {
                    set({ isLogin: true, user: profileEmptyData });
                }
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
