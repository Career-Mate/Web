export const mapRecommendJobData = (apiData) => {
    if (!apiData || apiData.status !== 200 || !apiData.data || !apiData.data.result) {
        console.error('Invalid API response:', apiData);
        return { jobs: [], hasNext: false, jobName: '', totalPages: 1 };
    }

    return {
        jobName: apiData.data.result.jobName,
        totalPages: apiData.data.totalPages,
        jobs: apiData.data.result.recruitThumbNailInfoDTOList.map((job) => ({
            id: job.recruitId,
            companyName: job.companyName || '정보 없음',
            contentName: job.title || '채용 정보 없음',
            deadline: job.deadLine || '마감일 미정',
            isScraped: job.isScraped,
        })),
    };
};
