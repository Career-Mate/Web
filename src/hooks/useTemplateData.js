import { useState, useEffect } from 'react';

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
