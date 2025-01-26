import useInput from '../../../hooks/useInput';
import * as S from './styled/styled';
import React, { useState } from 'react';

const ProfileInput = React.memo(({
    label,
    placeholder,
    errorMessage = `${label}을 입력해주세요!`,
    type = 'text',
    defaultValue = '',
    onBlur: externalOnBlur,
}) => {
    const [value, setValue] = useState(defaultValue);
    const showError = value.trim() === '';

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleBlur = () => {
        if (externalOnBlur) {
            externalOnBlur(value);
        }
    };

    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.StyledInput
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </S.StyledInputWrapper>
            {showError && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
        </S.InputContainer>
    );
});

export default ProfileInput;
