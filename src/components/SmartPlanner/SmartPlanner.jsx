import ProfileInput from '../common/Input/ProfileInput';
import CalendarInput from '../common/Input/CalendarInput/CalendarInput';
import TextTemplate from '../common/TextTemplate/TextTemplate';
import React, { useEffect,useCallback} from 'react';
import * as S from './styled/styled';

const SmartPlanner = ({ data, onDataChange }) => {
    const handleInputChange = useCallback((sectionIndex, value) => {
        const updatedData = [...data];
        if (updatedData[sectionIndex].activityName === value) return;
        updatedData[sectionIndex].activityName = value;
        onDataChange(updatedData);
    }, [data, onDataChange]);

    const handleDateChange = useCallback((sectionIndex, isStartDate, date) => {
        const updatedData = [...data];
        if (isStartDate) {
            updatedData[sectionIndex].goalPeriod.startDate = date;
        } else {
            updatedData[sectionIndex].goalPeriod.endDate = date;
        }
        onDataChange(updatedData);
    }, [data, onDataChange]);

    //삭제 예정
    useEffect(() => {
        console.log("Template data updated:",data);
    }, [data]);

    return (
        <S.Container>
            <S.InputContainer>
                <ProfileInput
                    label={'활동명'}
                    placeholder={'활동명을 입력하세요'}
                    defaultValue={data[0]?.activityName || ''}
                    onBlur={(value) => handleInputChange(0, value)}
                />
                <CalendarInput
                    label="목표 달성 기간"
                    startDate={data[0]?.goalPeriod?.startDate || null}
                    endDate={data[0]?.goalPeriod?.endDate || null}
                    onStartDateChange={(date) => handleDateChange(0, true, date)}
                    onEndDateChange={(date) => handleDateChange(0, false, date)}
                />
            </S.InputContainer>
            <TextTemplate
                data={data}
                onDataChange={(updateData) => onDataChange(updateData)}/>
        </S.Container>
    );
};

export default React.memo(SmartPlanner);
