import * as S from "./styled/styled"

const UnderlineButton = ({fontSize, onClick,children})=>{
    return(
        <S.StyledButton $fontSize = {fontSize} onClick={onClick}><span>{children}</span></S.StyledButton>
    )
}

export default UnderlineButton;