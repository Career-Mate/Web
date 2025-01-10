import useInput from '../../hooks/useInput';
import * as S from './styled/styled';

const ProfileInput = ({
    label,
    placeholder,
    errorMessage = `${label}을 입력해주세요!`,
    type = 'text',
    size = 'large',
    defaultValue = '',
}) => {
    const { value, onChange } = useInput(defaultValue);
    const showError = value === '';

    return (
        <S.InputContainer size={size}>
            <S.Label size={size}>{label}</S.Label>
            <S.StyledInputWrapper size={size}>
                <S.StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </S.StyledInputWrapper>
            {showError && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
        </S.InputContainer>
    );
};

export default ProfileInput;
