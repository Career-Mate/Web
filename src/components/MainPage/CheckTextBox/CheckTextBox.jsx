import * as S from './styled/styled';
import Check from '../../../assets/MainPage/check-icon.svg';

const CheckTextBox = ({ children }) => {
    return (
        <S.Container>
            <S.IconWrapper>
                <img src={Check} alt="체크-그린"></img>
            </S.IconWrapper>
            <S.Text>{children}</S.Text>
        </S.Container>
    );
};

export default CheckTextBox;
