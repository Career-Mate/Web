import { useState, useEffect } from 'react';
import { SmartPlannerInitialData } from '../data/smartTemplateData';
import { useCreatePlanner, useUpdatePlanner } from '../apis/smartPlanner/useSmartPlannerApi';
import { mapPlannerDataToState, mapStateToPlannerData } from '../utils/smartPlanner/plannerMappers';

export const useSmartPlanner = () => {
    const [data, setData] = useState(SmartPlannerInitialData);
    const {mutate: updatePlanner} = useUpdatePlanner();

    const checkPageCanSave = (page) => {
        const section = data[page];
        if (
            section.activityName === '' ||
            section.goalPeriod.startDate === null ||
            section.goalPeriod.endDate === null
        ) {
            return false;
        }
        return section.items.slice(0, 5).every((item) => item.content.trim().length > 0);
    };

    const areDatesEqual = (serverDate, localDate) => {
        const serverDateObj = new Date(serverDate);
        const localDateObj = new Date(localDate);
    
        const serverLocalTime = new Date(
            serverDateObj.getFullYear(), 
            serverDateObj.getMonth(), 
            serverDateObj.getDate()
        );
    
        const localTime = new Date(
            localDateObj.getFullYear(), 
            localDateObj.getMonth(), 
            localDateObj.getDate()
        );
    
        return serverLocalTime.getTime() === localTime.getTime();
    };
    

    const isPageModified = (serverData, page) => {
        const server = serverData[page];
        const local = data[page];
        if (!server || !local) {
            return true;
        }

        if (
            server.activityName !== local.activityName ||
            !areDatesEqual(server.startTime, local.goalPeriod.startDate) ||
            !areDatesEqual(server.endTime, local.goalPeriod.endDate)
        ) {
            return true;
        }
        const localItems = local.items.map((item) => item.content.trim());
        const serverItems = [
            server.specifics,
            server.measurable,
            server.achievable,
            server.relevant,
            server.timeBound,
            server.otherPlans,
        ];
        return JSON.stringify(localItems) !== JSON.stringify(serverItems);
    };


    const handleSave = (serverData,page) => {
        if (!checkPageCanSave(page)) {
            alert('항목을 모두 입력해주세요!');
            return;
        }
        else if(!isPageModified(serverData, page)){
            alert("수정된 내용이 없습니다!");
            return;
        }
        else {
            setData([...data]);
            console.log("map전 data",data);
            const updatedPlannerData = mapStateToPlannerData(data);
            console.log("updatePlannerData",updatedPlannerData);
            updatePlanner(updatedPlannerData);
        }
    };

    return {
        data,
        setData,
        handleSave,
        checkPageCanSave
    };
};

export const usePlannerDataEffect = (isSuccess, planner, setData, isError, error) => {
    const { mutate: createPlanner, isLoading: isCreating } = useCreatePlanner();

    const initialPlannerData = {
        activityName: '',
        startTime: null,
        endTime: null,
        specifics: '',
        measurable: '',
        achievable: '',
        relevant: '',
        timeBound: '',
        otherPlans: '',
    };

    useEffect(() => {
        if (isError && error?.response?.status === 400 && !isCreating) {
            createPlanner(initialPlannerData);
            return;
        }

        if (isSuccess && planner) {

            setData((prevData) => mapPlannerDataToState(planner, prevData));
        }
    }, [isSuccess, planner, setData, isError, error, createPlanner, isCreating]);
};