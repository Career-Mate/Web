import useInput from '../../../hooks/useInput';
import * as S from './styled/styled';

const ProfileInput = ({
    label,
    placeholder,
    errorMessage = `${label}을 입력해주세요!`,
    type = 'text',
    defaultValue = '',
    onChange: externalOnChange,
}) => {
    const { value, onChange: internalOnChange } = useInput(defaultValue);
    const showError = value === '';

    const handleChange = (e) => {
        internalOnChange(e);
        if (externalOnChange) {
            externalOnChange(e);
        }
    };

    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.StyledInput type={type} placeholder={placeholder} value={value} onChange={handleChange} />
            </S.StyledInputWrapper>
            {showError && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
        </S.InputContainer>
    );
};

export default ProfileInput;
