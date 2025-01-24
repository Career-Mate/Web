import { useState, useEffect } from 'react';

export const useTemplateData = (initialData, onDataChange) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const [data, setData] = useState(() => {
        return initialData.map((section) => ({
            ...section,
            items: section.items.map((item) => ({
                ...item,
                startDate: item.startDate ? new Date(item.startDate) : null,
                endDate: item.endDate ? new Date(item.endDate) : null,
            })),
        }));
    });

    useEffect(() => {
        const parsedData = initialData.map((section) => ({
            ...section,
            items: section.items.map((item) => ({
                ...item,
                startDate: item.startDate ? new Date(item.startDate) : null,
                endDate: item.endDate ? new Date(item.endDate) : null,
            })),
        }));
        setData(parsedData);
    }, [initialData]);

    const handleInputChange = (sectionIndex, itemIndex, value) => {
        const updatedData = JSON.parse(JSON.stringify(data));
        updatedData[sectionIndex].items[itemIndex].content = value;
        setData(updatedData);
        onDataChange(updatedData);
    };

    const handleDateChange = (sectionIndex, itemIndex, date, isStartDate) => {
        if (!(date instanceof Date && !isNaN(date))) {
            return;
        }

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

    const clearAll = (sectionIndex) => {
        const updatedData = data.map((section, index) => {
            if (index === sectionIndex) {
                return {
                    ...section,
                    items: section.items.map((item) => ({
                        ...item,
                        content: '',
                        startDate: null,
                        endDate: null,
                    })),
                };
            }
            return section;
        });

        setData(updatedData);
        onDataChange(updatedData);
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
