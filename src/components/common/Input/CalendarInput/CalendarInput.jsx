import * as S from './styled/styled';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useRef, useEffect } from 'react';
const CalendarInput = ({
    label,
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
}) => {
    const [inputValue, setInputValue] = useState('');

    const datePickerRef = useRef(null);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        if (start) onStartDateChange(start);
        if (end) onEndDateChange(end);
        if (start && end) {
            setInputValue(start.toLocaleDateString() + ' ~ ' + end.toLocaleDateString());
        }
    };
    const handleDateSelect = ()=>{
        onStartDateChange(null);
        onEndDateChange(null);
        datePickerRef.current.setFocus()
    }
    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.StyledInput
                    type="text"
                    placeholder="목표 달성 기간을 입력하세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={handleDateSelect}
                    
                />
                <DatePicker
                    ref={datePickerRef}
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    placeholderText="목표 달성 기간을 입력하세요"
                    dateFormat="yyyy/MM/dd"
                    customInput={<S.CustomDatePicker />}
                />
                <FaCalendarAlt className="calendar-icon" onClick={handleDateSelect} />
            </S.StyledInputWrapper>
        </S.InputContainer>
    );
};

export default CalendarInput;
