import * as S from './styled/styled';
import Check from '../../../assets/MainPage/check-icon.svg';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const CheckTextBox = ({ children }) => {
    const isMobileScreen = useIsMobileScreen(430);
    return (
        <S.CheckBoxContainer>
            {!isMobileScreen && (
                <S.IconWrapper>
                    <img src={Check} alt="체크-그린"></img>
                </S.IconWrapper>
            )}
            <S.Text>{children}</S.Text>
        </S.CheckBoxContainer>
    );
};

export default CheckTextBox;
