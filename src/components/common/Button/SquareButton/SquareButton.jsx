import * as S from './styled/styled';

const SquareButton = ({width, height, padding, backgroundColor, onClick, children}) =>{
    return (
        <S.StyledButton width={width} height = {height} padding={padding}
            backgroundColor= {backgroundColor} onClick = {onClick}
        >{children}</S.StyledButton>
    )
}
export default SquareButton;