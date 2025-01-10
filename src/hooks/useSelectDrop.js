import { useState } from 'react';

export const jobData = ['프론트엔드 개발자', '백엔드 개발자', 'PM(Product/Project Manager)', 'Designer'];

export const schoolData = ['한양대 에리카', '인하대', '가톨릭대', '한국공대'];

export const academicStatus = ['재학', '휴학', '졸업예정', '졸업', '졸업유예'];

export const useSelectDrop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isTouched, setIsTouched] = useState(false);

    const toggleDropDown = () => {
        if (!isOpen) {
            setIsTouched(true);
        }
        setIsOpen((prev) => !prev);
    };

    const onClick = (option) => {
        setSelectedOption(selectedOption === option ? null : option);
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
