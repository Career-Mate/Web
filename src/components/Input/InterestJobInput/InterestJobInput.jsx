import { useState, useEffect } from 'react';
import * as S from './styled/styled.js';
import dropButton from '../../../assets/interest-job-button.svg'; // 버튼 이미지

const InterestJobInput = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isTouched, setIsTouched] = useState(false);

    const optionData = ['프론트엔드 개발자', '백엔드 개발자', 'PM(Product/Project Manager)', 'Designer'];

    const toggleDropDown = () => {
        if (!isOpen) {
            setIsTouched(true);
        }
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <S.InputContainer>
            <S.Selector $isOpen={isOpen}>
                {selectedOption || <S.Text>관심 직무</S.Text>}
                <S.DropButtonWrapper onClick={toggleDropDown}>
                    <S.DropButton src={dropButton} />
                </S.DropButtonWrapper>
            </S.Selector>
            {isTouched && !selectedOption && (
                <S.WarningText $isTouched={isTouched} $isOpen={isOpen} $selectedOption={selectedOption}>
                    * 관심직무를 선택해주세요!
                </S.WarningText>
            )}
            {isOpen && (
                <S.OptionContainer>
                    <div className="triangle" />
                    <div className="triangle-white" />
                    <S.OptionWrapper>
                        {optionData.map((option) => (
                            <S.Option
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                $selected={selectedOption === option}
                            >
                                {option}
                            </S.Option>
                        ))}
                    </S.OptionWrapper>
                </S.OptionContainer>
            )}
        </S.InputContainer>
    );
};

export default InterestJobInput;
