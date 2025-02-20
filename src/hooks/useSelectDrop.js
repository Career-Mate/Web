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
        const newValue = currentValue === option ? '' : option;
        onChange(newValue);
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
