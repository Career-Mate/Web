import * as S from './styled/styled';

const DeadlineButton = ({ isSelected, onClick, children }) => {
    return (
        <S.ButtonContainer isSelected={isSelected} onClick={onClick}>
            {children}
        </S.ButtonContainer>
    );
};

export default DeadlineButton;
