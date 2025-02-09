import { useQuery } from '@tanstack/react-query';
import apiClient from '../axiosInstance';

// 직무별 템플릿 조회 API
export const fetchTemplate = async (templateType, jobType) => {
    const response = await apiClient.get('/templates', {
        params: { templateType, jobType },
    });
    return response.data;
};

export const useFetchTemplate = (templateType, jobType) => {
    return useQuery(['fetchTemplate', templateType, jobType], () => fetchTemplate(templateType, jobType), {
        initialData: { data: { templateInfoDTOList: [] } },
        onError: (error) => {
            console.error('템플릿 데이터 불러오기 실패:', error.response?.data || error.message);
        },
    });
};

// 커리어 작성 진행 상태 조회 API
export const fetchCompletionStatus = async (templateType) => {
    const response = await apiClient.get('/answers/completion-status');
    const statusList = response.data?.data?.answerCompletionStatusInfoDTOList || [];
    return statusList.find((item) => item.templateType === templateType)?.isComplete ?? false;
};

export const useFetchCompletionStatus = (templateType) => {
    return useQuery(['fetchCompletionStatus', templateType], () => fetchCompletionStatus(templateType), {
        initialData: false,
        onError: (error) => {
            console.error('커리어 작성 상태 조회 실패:', error.response?.data || error.message);
        },
    });
};

// 기존 답변 조회 API
export const fetchExistingAnswers = async (templateType) => {
    if (!templateType) {
        console.warn('templateType이 없음.');
        return [];
    }

    const response = await apiClient.get('/answers', { params: { templateType } });
    return response.data?.data || [];
};

export const useFetchExistingAnswers = (templateType) => {
    return useQuery(['fetchExistingAnswers', templateType], () => fetchExistingAnswers(templateType), {
        initialData: [],
        onError: (error) => {
            console.error('기존 데이터 불러오기 실패:', error.response?.data || error.message);
        },
    });
};

// 새 커리어 데이터 저장 API
export const saveTemplateData = async (data) => {
    const response = await apiClient.post('/answers', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const useSaveTemplateData = () => {
    return useMutation({
        mutationFn: saveTemplateData,
        onError: (error) => {
            console.error('데이터 저장 실패:', error.response?.data || error.message);
        },
        onSuccess: (data) => {
            console.log('데이터 저장 성공:', data);
        },
    });
};

// 기존 커리어 데이터 수정 API
export const updateTemplateData = async (data) => {
    const response = await apiClient.patch('/answers', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const useUpdateTemplateData = () => {
    return useMutation({
        mutationFn: updateTemplateData,
        onError: (error) => {
            console.error('데이터 수정 실패:', error.response?.data || error.message);
        },
        onSuccess: (data) => {
            console.log('데이터 수정 성공:', data);
        },
    });
};
