import * as S from './styled/styled';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useRef, useEffect } from 'react';
const CalendarInput = ({
    label,
    startDate,
    endDate,
    textDate,
    onStartDateChange,
    onEndDateChange,
    onDateInputChange,
}) => {
    const [inputValue, setInputValue] = useState('');

    const datePickerRef = useRef(null);

    useEffect(() => {
        if (startDate && endDate) {
            setInputValue(`${startDate.toLocaleDateString()} ~ ${endDate.toLocaleDateString()}`);
        } else if (textDate && textDate.trim() !== '') {
            setInputValue(textDate);
        }
    }, [startDate, endDate, textDate]);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        if (start) onStartDateChange(start);
        if (end) onEndDateChange(end);
        onDateInputChange('');
        if (start && end) {
            setInputValue(start.toLocaleDateString() + ' ~ ' + end.toLocaleDateString());
        }
    };
    const handleInputChange = (e) => {
        const value = e.target.value;
        onDateInputChange(value);
        setInputValue(value);
        onStartDateChange(null);
        onEndDateChange(null);
    };

    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.StyledInput
                    type="text"
                    placeholder="목표 달성 기간을 입력하세요"
                    value={inputValue}
                    onChange={handleInputChange}
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
                <FaCalendarAlt className="calendar-icon" onClick={() => datePickerRef.current.setFocus()} />
            </S.StyledInputWrapper>
        </S.InputContainer>
    );
};

export default CalendarInput;
