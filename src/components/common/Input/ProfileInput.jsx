import useInput from '../../../hooks/useInput';
import * as S from './styled/styled';
import React, { useState, useEffect } from 'react';

const ProfileInput = React.memo(
    ({
        label,
        placeholder,
        errorMessage = `${label}을 입력해주세요!`,
        type = 'text',
        defaultValue = '',
        onBlur: externalOnBlur,
        tabWidth,
        isSmartPlanner,
    }) => {
        const [value, setValue] = useState(defaultValue);

        useEffect(() => {
            setValue(defaultValue);
        }, [defaultValue]);

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
            <S.InputContainer $tabWidth={tabWidth} $isSmartPlanner={isSmartPlanner}>
                <S.Label $isSmartPlanner={isSmartPlanner}>{label}</S.Label>
                <S.StyledInputWrapper $tabWidth={tabWidth} $isSmartPlanner={isSmartPlanner}>
                    <S.StyledInput
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </S.StyledInputWrapper>
                {showError && <S.ErrorMessage $isSmartPlanner={isSmartPlanner}>* {errorMessage}</S.ErrorMessage>}
            </S.InputContainer>
        );
    },
);

export default ProfileInput;
