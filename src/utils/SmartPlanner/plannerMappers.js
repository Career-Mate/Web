export const mapPlannerDataToState = (plannerData, prevData) => {
    if (!plannerData) return prevData;

    const parseDate = (dateStr) => {
        if (!dateStr) return null;
        const date = new Date(dateStr);
        return new Date(Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ));
    };

    return plannerData.map((dataItem, index) => {
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
        } = dataItem;

        const prevItem = prevData[index];

        return {
            ...prevItem,
            activityName,
            goalPeriod: {
                startDate: parseDate(startTime),
                endDate: parseDate(endTime),
            },
            items: prevItem.items.map((item, idx) => ({
                ...item,
                content: [
                    specifics,
                    measurable,
                    achievable,
                    relevant,
                    timeBound,
                    otherPlans,
                ][idx] || item.content,
            })),
        };
    });
};

export const mapStateToPlannerData = (data) => {
        return{ 
            planners: data.map((planner) => ({
                activityName: planner.activityName,
                startTime: planner.goalPeriod.startDate ? planner.goalPeriod.startDate.toISOString() : null,
                endTime: planner.goalPeriod.endDate ? planner.goalPeriod.endDate.toISOString() : null,
                specifics: planner.items[0]?.content || '',
                measurable: planner.items[1]?.content || '',
                achievable: planner.items[2]?.content || '',
                relevant: planner.items[3]?.content || '',
                timeBound: planner.items[4]?.content || '',
                otherPlans: planner.items[5]?.content || '',
            }))
    };
};