import { useState } from 'react';

export const useSelectDrop = (defaultValue) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);
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
