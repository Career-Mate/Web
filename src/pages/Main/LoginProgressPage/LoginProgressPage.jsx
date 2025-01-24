import * as S from './styled/styled';
import useLoginPopUp from '../../../hooks/useLoginPopUp';
import Logo from '../../../assets/common/cm.svg';

const LoginProgressPage = () => {
    const { code } = useLoginPopUp();

    return (
        <S.ProgressContainer>
            <object width="300px" type="image/svg+xml" data={Logo}></object>
            {code && <p>잠시만 기다려주세요...</p>}
        </S.ProgressContainer>
    );
};

export default LoginProgressPage;
