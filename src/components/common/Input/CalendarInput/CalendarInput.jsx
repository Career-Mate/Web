import * as S from './styled/styled';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useRef, useEffect } from 'react';
const CalendarInput = ({ label, startDate, endDate, onStartDateChange, onEndDateChange }) => {
    const [inputValue, setInputValue] = useState('');

    const StartdatePickerRef = useRef(null);
    const EnddatePickerRef = useRef(null);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        if (start) onStartDateChange(start);
        if (end) onEndDateChange(end);
        if (start && end) {
            setInputValue(start.toLocaleDateString() + ' ~ ' + end.toLocaleDateString());
        }
    };
    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.DateInput isInline>
                    <FaCalendarAlt className="calendar-icon" onClick={()=>StartdatePickerRef.current.setFocus()}/>
                    <DatePicker
                        ref={StartdatePickerRef}
                        selected={startDate}
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
                    <FaCalendarAlt className="calendar-icon" onClick={()=>EnddatePickerRef.current.setFocus()} />
                    <DatePicker
                        ref={EnddatePickerRef}
                        selected={endDate}
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
};

export default CalendarInput;
