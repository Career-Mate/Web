import apiClient from '../axiosInstance';

// 직무별 템플릿 조회 API
export const fetchTemplate = async (templateType, jobType) => {
    try {
        console.log(`fetchTemplate 실행: templateType=${templateType}, jobType=${jobType}`);

        const response = await apiClient.get('/templates', {
            params: { templateType, jobType },
        });
        console.log('템플릿 데이터 응답:', response.data);
        return response.data;
    } catch (error) {
        console.error('템플릿 데이터 불러오기 실패:', error.response?.data || error.message);
        return { data: { templateInfoDTOList: [] } };
    }
};

// 커리어 작성 진행 상태 조회 API
export const fetchCompletionStatus = async () => {
    try {
        const response = await apiClient.get('/answers/completion-status');
        return response.data?.isComplete ?? false;
    } catch (error) {
        console.error('커리어 작성 상태 조회 실패:', error.response?.data || error.message);
        return false;
    }
};

// 기존 답변 조회 API (잘못된 요청 수정)
export const fetchExistingAnswers = async (templateType) => {
    try {
        if (!templateType) {
            console.warn('templateType이 없음.');
            return [];
        }

        const response = await apiClient.get('/answers', {
            params: { templateType },
        });

        return response.data?.data || [];
    } catch (error) {
        console.error('기존 데이터 불러오기 실패:', error.response?.data || error.message);
        return [];
    }
};

// 새 커리어 데이터 저장 API
export const saveTemplateData = async (data) => {
    try {
        console.log("📌 API 요청 데이터:", JSON.stringify(data, null, 2)); // 🔹 전송 데이터 확인

        const response = await apiClient.post('/answers', data);
        console.log("✅ 저장 성공:", response.data);

        return response.data;
    } catch (error) {
        console.error("❌ 데이터 저장 실패:", error.response?.data || error.message);
        throw error;
    }
};


// 기존 커리어 데이터 수정 API
export const updateTemplateData = async (data) => {
    try {
        await apiClient.patch('/answers', data);
    } catch (error) {
        console.error('데이터 수정 실패:', error.response?.data || error.message);
        throw error;
    }
};
