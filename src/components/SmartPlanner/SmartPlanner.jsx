import ProfileInput from '../common/Input/ProfileInput';
import CalendarInput from '../common/Input/CalendarInput/CalendarInput';
import TextTemplate from '../common/TextTemplate/TextTemplate';
import SmartTemplate from '../common/SmartTemplate/SmartTemplate';
import React from 'react';
import { handleDateChange, handleInputChange,handleClearAll } from "../../utils/SmartPlanner/plannerHandler"
import * as S from './styled/styled';

const SmartPlanner = ({ data, onDataChange, page }) => {
    
    return (
        <S.Container>
            <S.InputContainer>
                <ProfileInput
                    label={'활동명'}
                    placeholder={'활동명을 입력하세요'}
                    defaultValue={data[page]?.activityName || ''}
                    onBlur={(value) => handleInputChange(data, onDataChange, page, value)}
                />
                <CalendarInput
                    label="목표 달성 기간"
                    startDate={data[page]?.goalPeriod?.startDate || null}
                    endDate={data[page]?.goalPeriod?.endDate || null}
                    onStartDateChange={(date) => handleDateChange(data, onDataChange, page, true, date)}
                    onEndDateChange={(date) => handleDateChange(data, onDataChange, page, false, date)}
                />
            </S.InputContainer>
            <SmartTemplate
                data={[data[page]]}
                onClearAll={()=>handleClearAll(onDataChange,page)}
                onDataChange={(updatedArray) =>
                    onDataChange((prevData) => {
                        const newData = [...prevData];
                        newData[page] = updatedArray[0];
                        return newData;
                    })
                }
                page = {page}
            />
        </S.Container>
    );
};

export default React.memo(SmartPlanner);
