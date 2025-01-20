import * as S from './styled/styled';
import useOAuthPopUp from '../../../hooks/useOAuthPopUp';
import Logo from '../../../assets/common/cm.svg';

const LoginProgressPage = () => {
    const { code } = useOAuthPopUp();

    return (
        <S.ProgressContainer>
            <object width="300px" type="image/svg+xml" data={Logo}></object>
            {code && <p>잠시만 기다려주세요...</p>}
        </S.ProgressContainer>
    );
};

export default LoginProgressPage;
