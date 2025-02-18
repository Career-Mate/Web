import React, { useRef } from 'react';
import * as S from './styled/styled';
import Calendar from '../../../../assets/calendar.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarPicker = ({ width, startDate, endDate, onStartDateChange, onEndDateChange }) => {
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const convertToUTC = (date) => {
        if (!date) return null;
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
    };

    const isDateObject = (date) => date instanceof Date && !isNaN(date);

    return (
        <S.DatePickerRow width={width}>
            <S.DateInput isInline>
                <S.Icon
                    src={Calendar}
                    width={'26px'}
                    height={'26px'}
                    onClick={() => startDatePickerRef.current.setFocus()}
                />
                <DatePicker
                    ref={startDatePickerRef}
                    selected={isDateObject(startDate) ? startDate : null}
                    onChange={(date) => onStartDateChange(convertToUTC(date))}
                    startDate={startDate}
                    endDate={endDate}
                    selectsStart
                    placeholderText="시작 날짜를 선택해주세요"
                    dateFormat="yyyy년 MM월 dd일"
                />
            </S.DateInput>

            <S.DateDivider>|</S.DateDivider>

            <S.DateInput isInline>
                <S.Icon
                    src={Calendar}
                    width={'26px'}
                    height={'26px'}
                    onClick={() => endDatePickerRef.current.setFocus()}
                />
                <DatePicker
                    ref={endDatePickerRef}
                    selected={isDateObject(endDate) ? endDate : null}
                    onChange={(date) => onEndDateChange(convertToUTC(date))}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    selectsEnd
                    placeholderText="종료 날짜를 선택해주세요"
                    dateFormat="yyyy년 MM월 dd일"
                />
            </S.DateInput>
        </S.DatePickerRow>
    );
};

export default CalendarPicker;
