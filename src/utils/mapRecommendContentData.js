export const mapRecommendContentData = (apiData) => {
    if (!apiData || apiData.status !== 200 || !apiData.data) {
        console.error('Invalid API response:', apiData);
        return { contents: [] };
    }

    return {
        contents: apiData.data.result.map((content) => ({
            id: content.id,
            contentName: content.title || '컨텐츠 정보 없음',
            url: content.url,
            thumbnail: content.photo,
            isScrapped: content.isScrapped,
        })),
        hasNext: apiData.data.hasNext,
    };
};
