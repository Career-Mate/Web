import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const useLogin = () => {
    const navigate = useNavigate();
    const { isLogin, login, logout } = useAuthStore();

    const fetchToken = () => {
        const mockResponse = {
            jwt: 'mockJwtToken123456',
            name: '김단아',
            email: 'test@example.com',
        };

        console.log('JWT 토큰: ', mockResponse.jwt);
        login(mockResponse);
        navigate('/login/success');
    };

    const loginHandler = () => {
        fetchToken();
    };

    const logoutHandler = () => {
        logout();
        navigate('/');
    };

    return { isLogin, loginHandler, logoutHandler };
};

export default useLogin;
