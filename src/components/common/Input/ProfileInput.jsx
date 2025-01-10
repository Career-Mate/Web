import useInput from '../../../hooks/useInput';
import * as S from './styled/styled';

const ProfileInput = ({
    label,
    placeholder,
    errorMessage = `${label}을 입력해주세요!`,
    type = 'text',
    defaultValue = '',
}) => {
    const { value, onChange } = useInput(defaultValue);
    const showError = value === '';

    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </S.StyledInputWrapper>
            {showError && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
        </S.InputContainer>
    );
};

export default ProfileInput;
