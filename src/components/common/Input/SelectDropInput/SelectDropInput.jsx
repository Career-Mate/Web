import * as S from './styled/styled.js';
import dropButton from '../../../../assets/SelectDrop/interest-job-button.svg';
import upButton from '../../../../assets/SelectDrop/interest-job-button-up.svg';
import { useSelectDrop } from '../../../../hooks/useSelectDrop.js';

const SelectDropInput = ({ label, errorMessage, optionData, boxwidth, boxheight, value, onChange, tabWidth }) => {
    const { isOpen, selectedOption, isTouched, toggleDropDown, onClick } = useSelectDrop(value);

    return (
        <S.InputContainer $tabWidth={tabWidth}>
            <S.Label>{label}</S.Label>
            <S.SelectorWrapper>
                <S.Selector $isOpen={isOpen} onClick={toggleDropDown}>
                    {selectedOption || <S.Text>{label}</S.Text>}
                    <S.DropButtonWrapper>
                        <S.DropButton src={isOpen ? upButton : dropButton} />
                    </S.DropButtonWrapper>
                </S.Selector>

                {isOpen && (
                    <S.OptionContainer $width={boxwidth} $height={boxheight}>
                        <div className="triangle" />
                        <div className="triangle-white" />
                        <S.OptionWrapper $width={boxwidth} $height={boxheight}>
                            {optionData.map((option) => (
                                <S.Option
                                    key={option}
                                    onClick={() => {
                                        onClick(option);
                                        onChange(option);
                                    }}
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
