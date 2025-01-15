import { useState } from 'react';

export const userTemplateInitialData = [
    {
        title: '1. 인턴 경험',
        items: [
            { label: '직무명', content: '', placeholder: '직무명을 입력해주세요', type: 'text', required: true },
            {
                label: '근무기간',
                content: '',
                placeholder: '근무기간을 정해주세요',
                type: 'date',
                startDate: null,
                endDate: null,
            },
            { label: '회사명', content: '', placeholder: '회사명을 입력해주세요', type: 'text' },
            {
                label: '주요 성과 및 역할',
                content: '',
                placeholder: '주요 성과 및 역할을 입력해주세요',
                type: 'text',
            },
            { label: '느낀점 / 배운점', content: '', placeholder: '느낀점/배운점을 입력해주세요', type: 'text' },
        ],
    },
    {
        title: '2. 프로젝트 경험',
        items: [
            {
                label: '프로젝트명',
                content: '',
                placeholder: '프로젝트명을 입력해주세요',
                type: 'text',
                required: true,
            },
            {
                label: '근무기간',
                content: '',
                placeholder: '근무기간을 정해주세요',
                type: 'date',
                startDate: null,
                endDate: null,
            },
            { label: '설명', content: '', placeholder: '회사명을 입력해주세요', type: 'text' },
            {
                label: '주요 성과 및 역할',
                content: '',
                placeholder: '주요 성과 및 역할을 입력해주세요',
                type: 'text',
            },
            { label: '느낀점 / 배운점', content: '', placeholder: '느낀점/배운점을 입력해주세요', type: 'text' },
        ],
    },
];

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

export const useTemplateData = (initialData) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [data, setData] = useState(initialData);

    const handleInputChange = (sectionIndex, itemIndex, value) => {
        const updatedData = [...data];
        updatedData[sectionIndex].items[itemIndex].content = value;
        setData(updatedData);
    };

    const handleDateChange = (sectionIndex, itemIndex, date, isStartDate) => {
        const updatedData = [...data];
        if (isStartDate) {
            updatedData[sectionIndex].items[itemIndex].startDate = date;

            if (updatedData[sectionIndex].items[itemIndex].endDate < date) {
                updatedData[sectionIndex].items[itemIndex].endDate = null;
            }
        } else {
            updatedData[sectionIndex].items[itemIndex].endDate = date;
        }
        setData(updatedData);
    };

    const generateTooltipText = (section) => {
        const labels = section.items
            .slice(0, 4)
            .map((item, index) => `${index + 1}) ${item.label}`)
            .join('\n');
        return `${labels}은 꼭 입력해주세요!`;
    };

    return {
        tooltipVisible,
        setTooltipVisible,
        data,
        handleInputChange,
        handleDateChange,
        generateTooltipText,
    };
};

export default useTemplateData;
