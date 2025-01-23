import { useState } from 'react';

export const jobData = ['프론트엔드 개발자', '백엔드 개발자', 'PM(Product/Project Manager)', 'Designer'];

export const academicStatus = ['재학', '휴학', '졸업', '수료'];

export const educationalStatus = ['중학교 이하', '고등학교', '전문대학', '대학교', '석사', '박사'];

export const useSelectDrop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const toggleDropDown = () => {
        setIsTouched(true);
        setIsOpen((prev) => !prev);
    };

    const onClick = (option) => {
        setSelectedOption(selectedOption === option ? '' : option);
        setIsOpen(false);
    };

    return {
        isOpen,
        setIsOpen,
        selectedOption,
        setSelectedOption,
        isTouched,
        setIsTouched,
        toggleDropDown,
        onClick,
    };
};
