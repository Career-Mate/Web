import { useState, useEffect } from 'react';

export const textTemplateInitialData = [
    {
        title: '5. 최종 정리',
        items: [
            {
                label: '위에 기술한 경험들을 통해 내가 성장한 부분은 무엇인가요?',
                content: '',
                placeholder: '내용을 입력해주세요',

                required: true,
            },
            {
                label: '다양한 경험을 통해 발견한 나의 성향이나 강점은 무엇인가요?',
                content: '',
                placeholder: '내용을 입력해주세요',
            },
            {
                label: '다양한 경험을 통해 발견한 나의 단점은 무엇이고, 이를 어떻게 보완할 계획인가요?',
                content: '',
                placeholder: '내용을 입력해주세요',
            },
            {
                label: '앞으로 어떤 모습의 웹 개발자로 성장하고 싶나요?',
                content: '',
                placeholder: '내용을 입력해주세요',
            },
        ],
    },
];

export const useTemplateData = (initialData, onDataChange) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [data, setData] = useState(JSON.parse(JSON.stringify(initialData)));

    useEffect(() => {
        setData(JSON.parse(JSON.stringify(initialData)));
    }, [initialData]);

    const handleInputChange = (sectionIndex, itemIndex, value) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData[sectionIndex].items[itemIndex].content = value;
        setData(updatedData);
        onDataChange(updatedData);
    };

    const handleDateChange = (sectionIndex, itemIndex, date, isStartDate) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        if (isStartDate) {
            updatedData[sectionIndex].items[itemIndex].startDate = date;
        } else {
            updatedData[sectionIndex].items[itemIndex].endDate = date;
        }
        setData(updatedData);
        onDataChange(updatedData);
    };

    const generateTooltipText = (section) => {
        const labels = section.items
            .slice(0, 4)
            .map((item, index) => `${index + 1}) ${item.label}`)
            .join('\n');
        return `${labels}은 꼭 입력해주세요!`;
    };

    const clearAll = () => {
        const clearedData = data.map((section) => ({
            ...section,
            items: section.items.map((item) => ({
                ...item,
                content: '',
                startDate: null,
                endDate: null,
            })),
        }));
        setData(clearedData);
    };

    return {
        tooltipVisible,
        setTooltipVisible,
        data,
        handleInputChange,
        handleDateChange,
        generateTooltipText,
        clearAll,
    };
};

export default useTemplateData;
