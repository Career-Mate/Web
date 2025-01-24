import ProfileInput from '../common/Input/ProfileInput';
import CalendarInput from '../common/Input/CalendarInput/CalendarInput';
import TextTemplate from '../common/TextTemplate/TextTemplate';
import { TableCellHeader } from '../common/TextTemplate/styled/styled';
import * as S from './styled/styled';
import useTemplateData from '../../hooks/useTemplateData';
import { useEffect } from 'react';

const SmartPlanner = ({ data, onDataChange }) => {
    const handleInputChange = (sectionIndex, value) => {
        const updatedData = [...data];
        updatedData[sectionIndex].activityName = value;
        onDataChange(updatedData);
    };

    const handleDateChange = (sectionIndex, isStartDate, date) => {
        const updatedData = [...data];
        if (isStartDate) {
            updatedData[sectionIndex].goalPeriod.startDate = date;
        } else {
            updatedData[sectionIndex].goalPeriod.endDate = date;
        }
        onDataChange(updatedData);
    };

    const handleDateInputChange = (sectionIndex, value) => {
        const updatedData = [...data];
        updatedData[sectionIndex].goalPeriod.textDate = value;
        onDataChange(updatedData);
    };

    return (
        <S.Container>
            <S.InputContainer>
                <ProfileInput
                    label={'활동명'}
                    placeholder={'활동명을 입력하세요'}
                    defaultValue={data[0]?.activityName || ''}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                />
                <CalendarInput
                    label="목표 달성 기간"
                    startDate={data[0]?.goalPeriod?.startDate || null}
                    endDate={data[0]?.goalPeriod?.endDate || null}
                    textDate={data[0]?.goalPeriod?.textDate || ''}
                    onStartDateChange={(date) => handleDateChange(0, true, date)}
                    onEndDateChange={(date) => handleDateChange(0, false, date)}
                    onDateInputChange={(value) => handleDateInputChange(0, value)}
                />
            </S.InputContainer>
            <TextTemplate
                data={data}
                onDataChange={(updateData) => onDataChange(updateData)}
                TableCellHeader={TableCellHeader}
            />
        </S.Container>
    );
};

export default SmartPlanner;
