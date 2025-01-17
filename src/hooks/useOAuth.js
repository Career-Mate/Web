import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useOAuth = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') === 'true');

    useEffect(() => {
        localStorage.setItem('isLogin', isLogin ? 'true' : 'false');
    }, [isLogin]);

    const loginHandler = () => {
        setIsLogin(true);
        navigate('/login/success');
    };

    const logoutHandler = () => {
        setIsLogin(false);
        localStorage.removeItem('isLogin');
        navigate('/');
    };

    const fetchToken = useCallback(() => {
        const mockResponse = {
            jwt: 'mockJwtToken123456',
            name: 'John Doe',
            email: 'john.doe@example.com',
        };

        console.log('JWT 토큰: ', mockResponse.jwt);
        loginHandler();
    }, [loginHandler]);

    return { isLogin, fetchToken, loginHandler, logoutHandler };
};

export default useOAuth;
