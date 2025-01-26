import React, { useRef } from 'react';
import * as S from './styled/styled';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarInput = React.memo(({ label, startDate, endDate, onStartDateChange, onEndDateChange }) => {
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);
    
    const isDateObject = (date) => date instanceof Date && !isNaN(date);

    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.DateInput isInline>
                    <FaCalendarAlt className="calendar-icon" onClick={() => startDatePickerRef.current.setFocus()} />
                    <DatePicker
                        ref={startDatePickerRef}
                        selected={isDateObject(startDate) ? startDate : null}
                        onChange={(date) => onStartDateChange(date)}
                        startDate={startDate}
                        endDate={endDate}
                        selectsStart
                        placeholderText="시작 날짜를 선택해주세요"
                        dateFormat="yyyy년 MM월 dd일"
                    />
                </S.DateInput>

                <S.DateDivider>|</S.DateDivider>

                <S.DateInput isInline>
                    <FaCalendarAlt className="calendar-icon" onClick={() => endDatePickerRef.current.setFocus()} />
                    <DatePicker
                        ref={endDatePickerRef}
                        selected={isDateObject(endDate) ? endDate : null}
                        onChange={(date) => onEndDateChange(date)}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        selectsEnd
                        placeholderText="종료 날짜를 선택해주세요"
                        dateFormat="yyyy년 MM월 dd일"
                    />
                </S.DateInput>
            </S.StyledInputWrapper>
        </S.InputContainer>
    );
});

export default CalendarInput;
