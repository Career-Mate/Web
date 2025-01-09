import * as S from './styled/styled';

const ProfileInput = ({
    label,
    placeholder,
    value,
    onChange,
    errorMessage = `${label}을 입력해주세요!`,
    type = 'text',
    size = 'large',
}) => {
    return (
        <S.InputContainer size={size}>
            <S.Label size={size}>{label}</S.Label>
            <S.StyledInputWrapper size={size}>
                <S.StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </S.StyledInputWrapper>
            <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>
        </S.InputContainer>
    );
};

export default ProfileInput;
