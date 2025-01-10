import { useState } from 'react';

const useTemplateData = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const [data, setData] = useState([
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
    ]);

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

    return {
        tooltipVisible,
        setTooltipVisible,
        data,
        handleInputChange,
        handleDateChange,
    };
};

export default useTemplateData;
