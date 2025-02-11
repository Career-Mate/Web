const updateSectionData = (data, sectionIndex, key, value) => {
    const updatedData = [...data];
    updatedData[sectionIndex][key] = value;
    return updatedData;
};

export const handleInputChange = (data, onDataChange, sectionIndex, value) => {
    if (data[sectionIndex].activityName === value) return;
    const updatedData = updateSectionData(data, sectionIndex, 'activityName', value);
    onDataChange(updatedData);
};

export const handleDateChange = (data, onDataChange, sectionIndex, isStartDate, date) => {
    const key = isStartDate ? 'startDate' : 'endDate';
    const updatedGoalPeriod = {
        ...data[sectionIndex].goalPeriod,
        [key]: date,
    };

    const updatedData = updateSectionData(data, sectionIndex, 'goalPeriod', updatedGoalPeriod);
    onDataChange(updatedData);
};

export const handleTemplateChange = (data, sectionIndex, itemIndex, onDataChange, value) => {
    const updatedData = [...data];
    const updatedItems = [...updatedData[sectionIndex].items];
    updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        content: value,
    };
    updatedData[sectionIndex] = {
        ...updatedData[sectionIndex],
        items: updatedItems,
    };
    onDataChange(updatedData);
};

export const handleClearAll = (onDataChange, page) => {
    onDataChange((prevData) => {
        const newData = [...prevData];

        newData[page] = {
            ...newData[page],
            activityName: '',
            goalPeriod: { startDate: null, endDate: null },
            items: newData[page].items.map((item) => ({
                ...item,
                content: '',
            })),
        };

        return newData;
    });
};
