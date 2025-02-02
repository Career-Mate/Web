import { create } from 'zustand';
import { fetchTemplate, fetchExistingAnswers } from '../apis/CareerTemplate/templateAPI';

export const useTemplateStore = create((set, get) => ({
    data: [],
    isLoading: false,
    isError: false,

    fetchTemplateData: async (templateType, jobType) => {
        if (!jobType) return;

        set({ isLoading: true });
        console.log(`템플릿 데이터 요청: templateType=${templateType}, jobType=${jobType}`);

        try {
            const templateResponse = await fetchTemplate(templateType, jobType);
            console.log('템플릿 데이터 응답:', templateResponse);

            const answersResponse = await fetchExistingAnswers(templateType, jobType);
            console.log('기존 답변 데이터 응답:', answersResponse);

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
        } catch (error) {
            console.error('템플릿 데이터 불러오기 실패:', error);
            set({ isLoading: false, isError: true });
        }
    },

    handleInputChange: (sectionIndex, itemIndex, value) => {
        set((state) => {
            const newData = [...state.data];
            newData[sectionIndex] = { ...newData[sectionIndex] };
            newData[sectionIndex].items = [...newData[sectionIndex].items];
            newData[sectionIndex].items[itemIndex] = { ...newData[sectionIndex].items[itemIndex] };
            newData[sectionIndex].items[itemIndex].content = value;
            return { data: newData };
        });
    },

    handleDateChange: (sectionIndex, itemIndex, date, isStartDate) => {
        set((state) => {
            const newData = [...state.data];
            newData[sectionIndex] = { ...newData[sectionIndex] };
            newData[sectionIndex].items = [...newData[sectionIndex].items];
            newData[sectionIndex].items[itemIndex] = { ...newData[sectionIndex].items[itemIndex] };

            if (isStartDate) {
                newData[sectionIndex].items[itemIndex].startDate = date;
            } else {
                newData[sectionIndex].items[itemIndex].endDate = date;
            }
            return { data: newData };
        });
    },
}));

window.useTemplateStore = useTemplateStore;
