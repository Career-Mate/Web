import { create } from 'zustand';
import { fetchTemplate, fetchExistingAnswers, saveTemplateData } from '../apis/CareerTemplate/templateAPI';

export const useTemplateStore = create((set, get) => ({
    data: [],
    isLoading: false,
    isError: false,
    canSave: false,

    fetchTemplateData: async (templateType, jobType) => {
        if (!jobType) return;

        set({ isLoading: true });

        try {
            const templateResponse = await fetchTemplate(templateType, jobType);
            const answersResponse = await fetchExistingAnswers(templateType, jobType);

            const processedTemplateData = (templateResponse?.data?.templateInfoDTOList || []).map((template) => ({
                items: (template.questionDTOList || []).map((q) => ({
                    questionId: q.questionId,
                    label: q.content,
                    type: q.order === 3 ? 'date' : 'text',
                    isRequired: q.isRequired,
                    placeholder: templateType === 'SUMMARY' ? '내용을 입력해주세요' : `${q.content}을 입력해주세요.`,
                    content: '',
                    startDate: null,
                    endDate: null,
                })),
            }));

            const processedAnswersData = (answersResponse?.data || []).map((answer) => ({
                sequence: answer.sequence,
                items: answer.answerList.map((a) => ({
                    questionId: a.questionId,
                    label: a.questionName,
                    content: a.content,
                })),
            }));

            let finalData = processedAnswersData.length > 0 ? processedAnswersData : processedTemplateData;

            while (finalData.length < 2) {
                finalData.push({ items: processedTemplateData[0]?.items || [] });
            }

            set({ data: finalData, isLoading: false, isError: false });
            get().checkIfCanSave();
        } catch (error) {
            console.error('템플릿 데이터 불러오기 실패:', error);
            set({ isLoading: false, isError: true });
        }
    },

    handleInputChange: (sectionIndex, itemIndex, value) => {
        set((state) => {
            const newData = [...state.data];
            newData[sectionIndex].items[itemIndex].content = value;
            return { data: newData };
        });

        get().checkIfCanSave();
    },

    handleDateChange: (sectionIndex, itemIndex, date, isStartDate) => {
        set((state) => {
            const newData = [...state.data];
            if (isStartDate) {
                newData[sectionIndex].items[itemIndex].startDate = date;
            } else {
                newData[sectionIndex].items[itemIndex].endDate = date;
            }
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

        try {
            await saveTemplateData(get().data);
            alert('저장되었습니다.');
        } catch (error) {
            console.error('데이터 저장 실패:', error);
            alert('데이터 저장에 실패했습니다.');
        }
    },
}));

window.useTemplateStore = useTemplateStore;
