import * as S from './styled/styled';

const ProfileInput = ({ label, placeholder, value, onChange, type = 'text' }) => {
    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.StyledInputWrapper>
                <S.StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </S.StyledInputWrapper>
        </S.InputContainer>
    );
};

export default ProfileInput;
