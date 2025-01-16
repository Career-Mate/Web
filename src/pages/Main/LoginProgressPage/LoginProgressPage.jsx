import * as S from './styled/styled';
import useOAuthPopUp from '../../../hooks/useOAuthPopUp';

const LoginProgressPage = () => {
    const { code } = useOAuthPopUp();

    return (
        <S.ProgressContainer>
            <h1>로그인 중...</h1>
            {code && <p>인증 코드 처리 중입니다...</p>}
        </S.ProgressContainer>
    );
};

export default LoginProgressPage;
