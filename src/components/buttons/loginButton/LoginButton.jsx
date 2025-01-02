import * as S from './styled/styled';

const LoginButton = ({width, height, status, type}) =>{
    return (
        <S.Default width={width} height = {height} status= {status} type = {type}>
            {type === 'membership' ? "회원가입" : "로그인"}
        </S.Default>
    )
}
export default LoginButton;