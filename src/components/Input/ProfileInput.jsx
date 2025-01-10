import { useState } from 'react';
import * as S from './styled/styled';

const ProfileInput = ({
    label,
    placeholder,
    defaultValue = '',
    errorMessage = `${label}을 입력해주세요!`,
    type = 'text',
    size = 'large',
}) => {
    const [value, setValue] = useState(defaultValue);
    const showError = value === '';

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <S.InputContainer size={size}>
            <S.Label size={size}>{label}</S.Label>
            <S.StyledInputWrapper size={size}>
                <S.StyledInput type={type} placeholder={placeholder} value={value} onChange={handleChange} />
            </S.StyledInputWrapper>
            {showError && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
        </S.InputContainer>
    );
};

export default ProfileInput;
