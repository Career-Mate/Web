import * as S from './styled/styled.js';

const LogoutButton = ({ user, onProfile, onLogout }) => {
    return (
        <S.LogoutContainer>
            {user?.name?.trim() ? (
                <S.NameLabel>{user.name} 님 </S.NameLabel>
            ) : (
                <S.StyledButton onClick={onProfile}>프로필 설정하기</S.StyledButton>
            )}
            <S.Seperator>|</S.Seperator>
            <S.StyledButton onClick={onLogout}>로그아웃</S.StyledButton>
        </S.LogoutContainer>
    );
};

export default LogoutButton;
