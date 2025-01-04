import { InputContainer, Label, StyledInputWrapper, StyledInput } from './styled/styled';

const ProfileInput = ({ label, placeholder, value, onChange, type = 'text' }) => {
    return (
        <InputContainer>
            <Label>{label}</Label>
            <StyledInputWrapper>
                <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </StyledInputWrapper>
        </InputContainer>
    );
};

export default ProfileInput;
