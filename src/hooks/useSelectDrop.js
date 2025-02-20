import { useState, useEffect } from 'react';

export const useSelectDrop = (defaultValue) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        setSelectedOption(defaultValue);
    }, [defaultValue]);

    const toggleDropDown = () => {
        setIsTouched(true);
        setIsOpen((prev) => !prev);
    };

    const onClick = (option, currentValue, onChange) => {
        const newValue = currentValue === option ? '' : option; // 선택 시 같은 값이면 해제
        onChange(newValue); // 부모에서 상태 업데이트
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
