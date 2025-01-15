import * as S from './styled/styled.js';
import dropButton from '../../../../assets/interest-job-button.svg';
import { useSelectDrop } from '../../../../hooks/useSelectDrop.js';
import { useState } from 'react';

const SelectDropInput = ({ label, width, errorMessage, optionData, boxwidth, boxheight }) => {
    const { isOpen, selectedOption, isTouched, toggleDropDown, onClick } = useSelectDrop();

    const [zIndex, setZIndex] = useState(1);

    // 드롭다운 열기/닫기 시 z-index 동적 변경
    const handleToggleDropDown = () => {
        if (!isOpen) {
            setZIndex(1000); // 높은 z-index로 설정
        } else {
            setZIndex(1); // 기본 z-index로 복원
        }
        toggleDropDown();
    };
    return (
        <S.InputContainer $width={width}>
            <S.Label>{label}</S.Label>
            <S.SelectorWrapper>
                <S.Selector $isOpen={isOpen} onClick={handleToggleDropDown}>
                    {selectedOption || <S.Text>{label}</S.Text>}
                    <S.DropButtonWrapper>
                        <S.DropButton src={dropButton} />
                    </S.DropButtonWrapper>
                </S.Selector>

                {isOpen && (
                    <S.OptionContainer $width={boxwidth} $height={boxheight} style={{ zIndex }}>
                        <div className="triangle" />
                        <div className="triangle-white" />
                        <S.OptionWrapper $width={boxwidth} $height={boxheight}>
                            {optionData.map((option) => (
                                <S.Option
                                    key={option}
                                    onClick={() => onClick(option)}
                                    $selected={selectedOption === option}
                                >
                                    {option}
                                </S.Option>
                            ))}
                        </S.OptionWrapper>
                    </S.OptionContainer>
                )}
            </S.SelectorWrapper>
            <S.WarningText $isTouched={isTouched} $selectedOption={selectedOption}>
                * {errorMessage} 입력해주세요!
            </S.WarningText>
        </S.InputContainer>
    );
};

export default SelectDropInput;
