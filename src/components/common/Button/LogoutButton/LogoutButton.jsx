import * as S from './styled/styled.js'

const LogoutButton = ({name, onClick})=>{
    return(
        <S.LogoutContainer>
            <S.NameLabel>{name} 님 </S.NameLabel>
            <S.Seperator>|</S.Seperator>
            <S.StyledButton onClick={onClick}>로그아웃</S.StyledButton>
        </S.LogoutContainer>

    )
}

export default LogoutButton