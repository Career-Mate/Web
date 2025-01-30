
const updateSectionData = (data, sectionIndex, key, value) => {
    const updatedData = [...data];
    updatedData[sectionIndex][key] = value;
    return updatedData;
};

export const handleInputChange = (data, onDataChange, sectionIndex, value) => {
    if (data[sectionIndex].activityName === value) return;
    const updatedData = updateSectionData(data, sectionIndex, "activityName", value);
    onDataChange(updatedData);
};

export const handleDateChange = (data, onDataChange, sectionIndex, isStartDate, date) => {
    const key = isStartDate ? "startDate" : "endDate";
    const updatedGoalPeriod = {
        ...data[sectionIndex].goalPeriod,
        [key]: date,
    };

    const updatedData = updateSectionData(data, sectionIndex, "goalPeriod", updatedGoalPeriod);
    onDataChange(updatedData);
};