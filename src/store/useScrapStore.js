import { create } from 'zustand';

const useScrapStore = create((set) => ({
    scrapContents: [],
    addScrapContent: (content) => set((state) => ({ scrapContents: [...state.scrapContents, content] })),
    removeScrapContent: (contentId) =>
        set((state) => ({
            scrapContents: state.scrapContents.filter((content) => content.id !== contentId),
        })),

    scrapJobs: [],
    addScrapJob: (job) => set((state) => ({ scrapJobs: [...state.scrapJobs, job] })),
    removeScrapJob: (jobId) =>
        set((state) => ({
            scrapJobs: state.scrapJobs.filter((job) => job.id !== jobId),
        })),
}));

export default useScrapStore;
