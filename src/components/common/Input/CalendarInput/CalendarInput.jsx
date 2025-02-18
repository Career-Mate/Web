import React from 'react';
import * as S from './styled/styled';
import CalendarPicker from '../CalendarPicker/CalendarPicker';

const CalendarInput = React.memo(({ label, startDate, endDate, onStartDateChange, onEndDateChange }) => {
    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <CalendarPicker
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={onStartDateChange}
                    onEndDateChange={onEndDateChange}
                />
            </S.StyledInputWrapper>
        </S.InputContainer>
    );
});

export default CalendarInput;
