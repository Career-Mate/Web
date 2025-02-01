import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchTemplate, fetchExistingAnswers } from './templateApi';

export const useTemplateData = (templateType, jobType) => {
    const [data, setData] = useState([]);

    // 템플릿 데이터 불러오기
    const {
        data: templateDataRaw,
        isLoading: isTemplateLoading,
        isError: isTemplateError,
    } = useQuery({
        queryKey: ['template', templateType, jobType],
        queryFn: async () => {
            console.log(`📌 템플릿 데이터 요청: templateType=${templateType}, jobType=${jobType}`);
            const response = await fetchTemplate(templateType, jobType);
            console.log('📌 템플릿 데이터 응답:', response);
            return response;
        },
        staleTime: 1000 * 60 * 5,
    });

    // 기존 답변 데이터 불러오기
    const {
        data: answersDataRaw,
        isLoading: isAnswersLoading,
        isError: isAnswersError,
    } = useQuery({
        queryKey: ['answers', templateType, jobType],
        queryFn: () => fetchExistingAnswers(templateType, jobType),
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        if (!isTemplateLoading && !isAnswersLoading) {
            console.log(`jobType 변경 감지: ${jobType} -> 데이터 새로 불러옴`);

            const processedTemplateData = (templateDataRaw?.data?.templateInfoDTOList || []).map((template) => ({
                items: (template.questionDTOList || []).map((q) => ({
                    questionId: q.questionId,
                    label: q.content,
                    type: q.order === 3 ? 'date' : 'text',
                    isRequired: q.isRequired,
                    placeholder: `${q.content}을 입력해주세요.`,
                    content: '',
                    startDate: null,
                    endDate: null,
                })),
            }));

            console.log('가공된 템플릿 데이터:', processedTemplateData);

            const processedAnswersData = (answersDataRaw?.data || []).map((answer) => ({
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

            setData(finalData);
        }
    }, [templateDataRaw, answersDataRaw, isTemplateLoading, isAnswersLoading, jobType]);

    const handleInputChange = (sectionIndex, itemIndex, value) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[sectionIndex] = { ...newData[sectionIndex] };
            newData[sectionIndex].items = [...newData[sectionIndex].items];
            newData[sectionIndex].items[itemIndex] = { ...newData[sectionIndex].items[itemIndex] };
            newData[sectionIndex].items[itemIndex].content = value;
            return newData;
        });
    };

    const handleDateChange = (sectionIndex, itemIndex, date, isStartDate) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[sectionIndex] = { ...newData[sectionIndex] };
            newData[sectionIndex].items = [...newData[sectionIndex].items];
            newData[sectionIndex].items[itemIndex] = { ...newData[sectionIndex].items[itemIndex] };

            if (isStartDate) {
                newData[sectionIndex].items[itemIndex].startDate = date;
            } else {
                newData[sectionIndex].items[itemIndex].endDate = date;
            }
            return newData;
        });
    };

    return {
        data: data || [],
        setData,
        handleInputChange,
        handleDateChange,
        isLoading: isTemplateLoading || isAnswersLoading,
        isError: isTemplateError || isAnswersError,
    };
};

export default useTemplateData;
