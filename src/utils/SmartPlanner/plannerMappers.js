export const mapPlannerDataToState = (plannerData, prevData) => {
    if (!plannerData) return prevData;

    const { 
        activityName, 
        startTime, 
        endTime, 
        specifics, 
        measurable, 
        achievable, 
        relevant, 
        timeBound, 
        otherPlans 
    } = plannerData;

    const updatedData = [...prevData];
    updatedData[0] = {
        ...updatedData[0],
        activityName,
        goalPeriod: {
            startDate: startTime == null ? null : new Date(startTime),
            endDate: endTime == null ? null : new Date(endTime),
        },
        items: updatedData[0].items.map((item, index) => ({
            ...item,
            content: [
                specifics,
                measurable,
                achievable,
                relevant,
                timeBound,
                otherPlans,
            ][index] || item.content,
        })),
    };

    return updatedData;
};
export const mapStateToPlannerData = (data) => ({
    activityName: data[0].activityName,
    startTime: data[0].goalPeriod.startDate.toISOString(),
    endTime: data[0].goalPeriod.endDate.toISOString(),
    specifics: data[0].items[0].content,
    measurable: data[0].items[1].content,
    achievable: data[0].items[2].content,
    relevant: data[0].items[3].content,
    timeBound: data[0].items[4].content,
    otherPlans: data[0].items[5].content,
});