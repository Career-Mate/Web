import * as S from './styled/styled.js';
import dropButton from '../../../assets/interest-job-button.svg';
import { useSelectDrop } from '../../../hooks/useSelectDrop.js';

const SelectDropInput = ({ label, width, errorMessage, optionData, boxwidth, boxheight }) => {
    const { isOpen, selectedOption, isTouched, toggleDropDown, onClick } = useSelectDrop();

    return (
        <S.InputContainer $width={width}>
            <S.Label>{label}</S.Label>
            <S.SelectorWrapper>
                <S.Selector $isOpen={isOpen}>
                    {selectedOption || <S.Text>{label}</S.Text>}
                    <S.DropButtonWrapper onClick={toggleDropDown}>
                        <S.DropButton src={dropButton} />
                    </S.DropButtonWrapper>
                </S.Selector>
                {isTouched && !selectedOption && (
                    <S.WarningText $isTouched={isTouched} $isOpen={isOpen} $selectedOption={selectedOption}>
                        * {errorMessage} 입력해주세요!
                    </S.WarningText>
                )}
                {isOpen && (
                    <S.OptionContainer $width={boxwidth} $height={boxheight}>
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
        </S.InputContainer>
    );
};

export default SelectDropInput;
