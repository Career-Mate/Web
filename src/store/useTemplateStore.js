const dataURLtoFile = (dataUrl, fileName) => {
    let arr = dataUrl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
};

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
    uploadedImages: {},

    setUploadedImages: (newImages) => {
        set((state) => ({
            uploadedImages: {
                ...state.uploadedImages,
                ...newImages,
            },
        }));
    },

    fetchTemplateData: async (templateType, jobType) => {
        if (!jobType) return;

        set({ isLoading: true, templateType });

        try {
            const isComplete = await fetchCompletionStatus(templateType);
            const templateResponse = await fetchTemplate(templateType, jobType);
            const answersResponse = await fetchExistingAnswers(templateType);

            let processedTemplateData = [];

            if (answersResponse.length > 0) {
                processedTemplateData = answersResponse.map((answer) => ({
                    sequence: answer.sequence,
                    items: answer.answerInfoDTOList.map((a) => {
                        const question = templateResponse.data.templateInfoDTOList[0].questionDTOList.find(
                            (q) => q.questionId === a.questionId,
                        );
                        const isDateField = ['근무기간', '기간'].includes(question?.content);

                        return {
                            questionId: a.questionId,
                            label: question?.content || '질문 없음',
                            type:
                                isDateField && !['TECHNICAL_SKILLS', 'SUMMARY'].includes(templateType)
                                    ? 'date'
                                    : 'text',
                            isRequired: question?.isRequired || false,
                            placeholder: `${question?.content || '항목'}을 입력해주세요.`,
                            content: isDateField ? '' : a.content || '',
                            ...(isDateField && !['TECHNICAL_SKILLS', 'SUMMARY'].includes(templateType)
                                ? {
                                      startDate: a.content?.split('~')[0]?.trim() || null,
                                      endDate: a.content?.split('~')[1]?.trim() || null,
                                  }
                                : {}),
                        };
                    }),
                }));
            } else {
                processedTemplateData = (templateResponse?.data?.templateInfoDTOList || []).map((template, index) => ({
                    sequence: index + 1,
                    items: (template.questionDTOList || []).map((q) => {
                        const isDateField = ['근무기간', '기간'].includes(q.content);

                        return {
                            questionId: q.questionId,
                            label: q.content,
                            type:
                                isDateField && !['TECHNICAL_SKILLS', 'SUMMARY'].includes(templateType)
                                    ? 'date'
                                    : 'text',
                            isRequired: q.isRequired,
                            placeholder: `${q.content}을 입력해주세요.`,
                            content: '',
                            ...(isDateField && !['TECHNICAL_SKILLS', 'SUMMARY'].includes(templateType)
                                ? { startDate: null, endDate: null }
                                : {}),
                        };
                    }),
                }));
            }

            while (processedTemplateData.length < 2) {
                processedTemplateData.push({
                    sequence: processedTemplateData.length + 1,
                    items: processedTemplateData[0]?.items
                        ? processedTemplateData[0].items.map((item) => ({
                              ...item,
                              content: '',
                              ...(item.type === 'date' && !['TECHNICAL_SKILLS', 'SUMMARY'].includes(templateType)
                                  ? { startDate: null, endDate: null }
                                  : {}),
                          }))
                        : [],
                });
            }

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

        const { templateType, data } = get();

        if (templateType === 'SUMMARY') {
            set({ canSave: true });
            return;
        }

        if (templateType === 'TECHNICAL_SKILLS') {
            const isValid = data.every((section) => section.items.every((item) => item.content.trim().length > 0));
            set({ canSave: isValid });
            return;
        }

        const isValid = data.some((section) =>
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
        const { templateType, canSave, uploadedImages } = get();

        if (!canSave) {
            if (templateType === 'TECHNICAL_SKILLS') {
                alert('항목을 모두 입력해주세요!');
            } else if (templateType === 'SUMMARY') {
                alert('저장되었습니다!');
            } else {
                alert('필수 항목을 모두 입력해주세요!');
            }
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

        if (uploadedImages) {
            Object.keys(uploadedImages).forEach((key) => {
                const imageFile = dataURLtoFile(uploadedImages[key], 'image.png');
                formData.append('image', imageFile);
            });
        }

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

            alert('저장되었습니다.');
        } catch (error) {
            console.error('데이터 저장 실패:', error);

            if (error.response?.status === 400 && error.response?.data?.code === 'EAN001') {
                try {
                    const response = await updateTemplateData(formData);
                    alert('수정되었습니다.');
                    set({ hasExistingData: true });
                } catch (patchError) {
                    alert('데이터 수정에 실패했습니다.');
                }
            } else {
                alert('데이터 저장에 실패했습니다.');
            }
        }
    },

    clearAll: async (sectionIndex) => {
        set((state) => {
            const templateType = state.templateType;
            const isTechnicalOrSummary = ['TECHNICAL_SKILLS', 'SUMMARY'].includes(templateType);

            const newData = state.data.map((section, sIndex) =>
                sIndex === sectionIndex
                    ? {
                          ...section,
                          items: section.items.map((item) => ({
                              ...item,
                              content: '',
                              ...(item.type === 'date' && !isTechnicalOrSummary
                                  ? { startDate: null, endDate: null }
                                  : {}),
                          })),
                      }
                    : section,
            );

            return { data: newData };
        });

        set((state) => ({
            data: [...state.data],
        }));

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

            const { templateType, jobType } = get();
            await get().fetchTemplateData(templateType, jobType);
        } catch (error) {
            console.error(`템플릿 ${sectionIndex + 1} 내용 삭제 실패:`, error);
        }
    },
}));

window.useTemplateStore = useTemplateStore;
