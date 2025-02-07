import { create } from 'zustand';
import {
    fetchTemplate,
    fetchExistingAnswers,
    fetchCompletionStatus,
    saveTemplateData,
    updateTemplateData,
} from '../apis/CareerTemplate/templateApi';

export const useTemplateStore = create((set, get) => ({
    data: [],
    templateType: '',
    isLoading: false,
    isError: false,
    canSave: false,
    hasExistingData: false,

    fetchTemplateData: async (templateType, jobType) => {
        if (!jobType) return;

        console.log('fetchTemplateData :', { templateType, jobType });
        set({ isLoading: true, templateType });

        try {
            const isComplete = await fetchCompletionStatus(templateType);
            const templateResponse = await fetchTemplate(templateType, jobType);
            const answersResponse = await fetchExistingAnswers(templateType);

            if (!answersResponse || answersResponse.length === 0) {
                console.warn('기존 답변 데이터가 없음!');
            }

            const answerMap = {};
            answersResponse.forEach((answer) => {
                answerMap[answer.sequence] = {};
                answer.answerInfoDTOList.forEach((a) => {
                    if (a.content !== undefined && a.content !== null && a.content.trim() !== '') {
                        answerMap[answer.sequence][a.questionId] = a.content.trim();
                    }
                });
            });

            const processedTemplateData = answersResponse.map((answer) => ({
                sequence: answer.sequence,
                items:
                    templateResponse?.data?.templateInfoDTOList[0]?.questionDTOList.map((q) => {
                        let content = '';
                        let startDate = null;
                        let endDate = null;

                        const existingAnswer = answer.answerInfoDTOList.find((a) => a.questionId === q.questionId);
                        if (existingAnswer) {
                            content = existingAnswer.content;
                            if (q.content.includes('기간') && content.includes('~')) {
                                const [start, end] = content.split('~').map((date) => date.trim());
                                startDate = start || null;
                                endDate = end || null;
                                content = '';
                            }
                        }

                        return {
                            questionId: q.questionId,
                            label: q.content,
                            type: ['근무기간', '기간'].includes(q.content) ? 'date' : 'text',
                            isRequired: q.isRequired,
                            placeholder: `${q.content}을 입력해주세요.`,
                            content,
                            startDate,
                            endDate,
                        };
                    }) || [],
            }));

            while (processedTemplateData.length < 2) {
                processedTemplateData.push({
                    sequence: processedTemplateData.length + 1,
                    items: processedTemplateData[0]?.items
                        ? processedTemplateData[0].items.map((item) => ({
                              ...item,
                              content: '',
                              startDate: null,
                              endDate: null,
                          }))
                        : [],
                });
            }

            console.log('최종 데이터 상태 업데이트 완료:', processedTemplateData);

            set({
                data: processedTemplateData,
                isLoading: false,
                isError: false,
                hasExistingData: isComplete,
            });
        } catch (error) {
            console.error('템플릿 데이터 불러오기 실패:', error);
            set({ isLoading: false, isError: true });
        }
    },

    handleInputChange: (sectionIndex, itemIndex, value) => {
        set((state) => {
            const newData = state.data.map((section, sIndex) =>
                sIndex === sectionIndex
                    ? {
                          ...section,
                          items: section.items.map((item, iIndex) =>
                              iIndex === itemIndex ? { ...item, content: value } : item,
                          ),
                      }
                    : section,
            );
            return { data: newData };
        });
        get().checkIfCanSave();
    },

    handleDateChange: (sectionIndex, itemIndex, date, isStartDate) => {
        set((state) => {
            const newData = state.data.map((section, sIndex) =>
                sIndex === sectionIndex
                    ? {
                          ...section,
                          items: section.items.map((item, iIndex) =>
                              iIndex === itemIndex ? { ...item, [isStartDate ? 'startDate' : 'endDate']: date } : item,
                          ),
                      }
                    : section,
            );
            return { data: newData };
        });
        get().checkIfCanSave();
    },

    checkIfCanSave: (skipValidation = false) => {
        if (skipValidation) {
            set({ canSave: true });
            return;
        }

        const isValid = get().data.some((section) =>
            section.items.slice(0, 4).every((item) => {
                if (item.type === 'date') {
                    return item.startDate !== null && item.endDate !== null;
                }
                return item.content.trim().length > 0;
            }),
        );

        set({ canSave: isValid });
    },

    handleSave: async () => {
        if (!get().canSave) {
            alert('필수 항목을 모두 입력해주세요!');
            return;
        }

        const formatDate = (date) => {
            if (!date) return '';
            const d = new Date(date);
            return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
        };

        const requestData = {
            answerGroupDTOList: get().data.map((section, index) => ({
                sequence: index + 1,
                answerInfoDTOList: section.items.map((item) => ({
                    questionId: item.questionId,
                    content:
                        item.type === 'date'
                            ? `${formatDate(item.startDate)}${item.startDate && item.endDate ? '~' : ''}${formatDate(item.endDate)}`
                            : (item.content ?? ''),
                })),
            })),
        };

        const formData = new FormData();
        const jsonBlob = new Blob([JSON.stringify(requestData)], { type: 'application/json' });
        formData.append('data', jsonBlob);

        try {
            const { templateType, hasExistingData } = get();

            let isComplete = hasExistingData;
            if (!hasExistingData) {
                isComplete = await fetchCompletionStatus(templateType);
            }

            let response;
            if (isComplete) {
                response = await updateTemplateData(formData);
                set({ hasExistingData: true });
            } else {
                response = await saveTemplateData(formData);
                set({ hasExistingData: true });
            }

            console.log('저장 성공:', response);
            alert('저장되었습니다.');
        } catch (error) {
            console.error('데이터 저장 실패:', error);

            if (error.response?.status === 400 && error.response?.data?.code === 'EAN001') {
                try {
                    const response = await updateTemplateData(formData);
                    console.log('수정 성공:', response);
                    alert('수정되었습니다.');
                    set({ hasExistingData: true });
                } catch (patchError) {
                    console.error('데이터 수정 실패:', patchError);
                    alert('데이터 수정에 실패했습니다.');
                }
            } else {
                alert('데이터 저장에 실패했습니다.');
            }
        }
    },

    clearAll: async (sectionIndex) => {
        set((state) => {
            const newData = [...state.data];

            if (newData[sectionIndex]?.items) {
                newData[sectionIndex].items = newData[sectionIndex].items.map((item) => ({
                    ...item,
                    content: '',
                    startDate: null,
                    endDate: null,
                }));
            }

            return { data: newData };
        });

        get().checkIfCanSave();

        try {
            const requestData = {
                answerGroupDTOList: [
                    {
                        sequence: sectionIndex + 1,
                        answerInfoDTOList: get().data[sectionIndex].items.map((item) => ({
                            questionId: item.questionId,
                            content: '',
                        })),
                    },
                ],
            };

            const formData = new FormData();
            const jsonBlob = new Blob([JSON.stringify(requestData)], { type: 'application/json' });
            formData.append('data', jsonBlob);

            await updateTemplateData(formData);
            console.log('전체 내용 삭제 및 업데이트 성공');
        } catch (error) {
            console.error('전체 내용 삭제 요청 실패: ', error);
        }
    },
}));

window.useTemplateStore = useTemplateStore;
