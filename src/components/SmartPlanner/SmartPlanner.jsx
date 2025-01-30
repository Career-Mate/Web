import ProfileInput from '../common/Input/ProfileInput';
import CalendarInput from '../common/Input/CalendarInput/CalendarInput';
import TextTemplate from '../common/TextTemplate/TextTemplate';
import React, { useCallback } from 'react';
import * as S from './styled/styled';

const SmartPlanner = ({ data, onDataChange, page }) => {
    const handleInputChange = useCallback(
        (sectionIndex, value) => {
            const updatedData = [...data];
            if (updatedData[sectionIndex].activityName === value) return;
            updatedData[sectionIndex].activityName = value;
            onDataChange(updatedData);
        },
        [data, onDataChange],
    );

    const handleDateChange = useCallback(
        (sectionIndex, isStartDate, date) => {
            const updatedData = [...data];
            if (isStartDate) {
                updatedData[sectionIndex].goalPeriod.startDate = date;
            } else {
                updatedData[sectionIndex].goalPeriod.endDate = date;
            }
            onDataChange(updatedData);
        },
        [data, onDataChange],
    );
    console.log(page+ "의 data");
    console.log(data[page]);
    return (
        <S.Container>
            <S.InputContainer>
                <ProfileInput
                    label={'활동명'}
                    placeholder={'활동명을 입력하세요'}
                    defaultValue={data[page]?.activityName || ''}
                    onBlur={(value) => handleInputChange(page, value)}
                />
                <CalendarInput
                    label="목표 달성 기간"
                    startDate={data[page]?.goalPeriod?.startDate || null}
                    endDate={data[page]?.goalPeriod?.endDate || null}
                    onStartDateChange={(date) => handleDateChange(page, true, date)}
                    onEndDateChange={(date) => handleDateChange(page, false, date)}
                />
            </S.InputContainer>
            <TextTemplate data={[data[page]]} onDataChange={(updatedArray) => onDataChange(prevData=>{
                const newData = [...prevData];
                newData[page] = updatedArray[0];
                return newData;
            })} />
        </S.Container>
    );
};

export default React.memo(SmartPlanner);
