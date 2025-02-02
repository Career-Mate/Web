export const mapRecommendJobData = (apiData) => {
    if (!apiData || apiData.status !== 200 || !apiData.data) {
        console.error('Invalid API response:', apiData);
        return { jobs: [], hasNext: false };
    }

    return {
        jobs: apiData.data.result.recruitThumbNailInfoDTOList.map((job) => ({
            id: job.recruitId,
            companyName: job.companyName || '회사 정보 없음',
            contentName: job.title || '채용 정보 없음',
            deadline: job.deadLine || '마감일 정보 없음',
            isScraped: job.isScraped,
        })),
        hasNext: apiData.data.hasNext,
    };
};
