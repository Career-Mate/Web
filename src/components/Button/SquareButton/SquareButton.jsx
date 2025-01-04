import * as S from './styled/styled';

const SquareButton = ({width, height, backgroundColor,children}) =>{
    return (
        <S.StyledButton width={width} height = {height} backgroundColor= {backgroundColor}>{children}</S.StyledButton>
    )
}
export default SquareButton;