import { create } from 'zustand';
import { useEffect } from 'react';
import apiClient from '../apis/axiosInstance';

export const useJobStore = create((set, get) => ({
    jobType: null,
    setJobType: (newJobType) => set({ jobType: newJobType }),

    fetchUserJobType: async () => {
        try {
            if (get().jobType) return;
            const response = await apiClient.get('/member');
            const userJobType = response.data.data.job?.name || '직무 없음';
            set({ jobType: userJobType });
        } catch (error) {
            console.error('사용자 정보 불러오기 실패:', error);
            set({ jobType: '직무 없음' });
        }
    },
}));

export const useFetchUserJobType = () => {
    const fetchUserJobType = useJobStore((state) => state.fetchUserJobType);
    useEffect(() => {
        fetchUserJobType();
    }, [fetchUserJobType]);
};
