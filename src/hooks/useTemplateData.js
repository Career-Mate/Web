import { useState, useCallback, useEffect } from 'react';

export const useTemplateData = (initialData, onDataChange) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [data, setData] = useState(() =>
        initialData.map((section) => ({
            ...section,
            items: section.items.map((item) => ({
                ...item,
                startDate: item.startDate ? new Date(item.startDate) : null,
                endDate: item.endDate ? new Date(item.endDate) : null,
            })),
        })),
    );

    useEffect(() => {
        setData(
            initialData.map((section) => ({
                ...section,
                items: section.items.map((item) => ({
                    ...item,
                    startDate: item.startDate ? new Date(item.startDate) : null,
                    endDate: item.endDate ? new Date(item.endDate) : null,
                })),
            })),
        );
    }, [initialData]);

    const handleInputChange = useCallback(
        (sectionIndex, itemIndex, value) => {
            const updatedData = [...data];
            updatedData[sectionIndex].items[itemIndex].content = value;
            setData(updatedData);
            onDataChange(updatedData);
        },
        [data, onDataChange],
    );

    const handleDateChange = useCallback(
        (sectionIndex, itemIndex, date, isStartDate) => {
            if (!(date instanceof Date && !isNaN(date))) return;

            const updatedData = [...data];
            updatedData[sectionIndex].items[itemIndex][isStartDate ? 'startDate' : 'endDate'] = date;
            setData(updatedData);
            onDataChange(updatedData);
        },
        [data, onDataChange],
    );

    const generateTooltipText = useCallback((section) => {
        const labels = section.items
            .slice(0, 4)
            .map((item, index) => `${index + 1}) ${item.label}`)
            .join('\n');
        return `${labels}은 꼭 입력해주세요!`;
    }, []);

    const clearAll = useCallback(
        (sectionIndex) => {
            const updatedData = data.map((section, idx) =>
                idx === sectionIndex
                    ? {
                          ...section,
                          items: section.items.map((item) => ({
                              ...item,
                              content: '',
                              startDate: null,
                              endDate: null,
                          })),
                      }
                    : section,
            );
            setData(updatedData);
            onDataChange(updatedData);
        },
        [data, onDataChange],
    );

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
