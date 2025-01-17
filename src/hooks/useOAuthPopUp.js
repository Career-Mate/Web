import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useOAuthPopUp = () => {
    const navigate = useNavigate();
    const [popUp, setPopUp] = useState(null);
    const [code, setCode] = useState(null);
    const isLogin = localStorage.getItem('isLogin') === 'true';

    const loginHandler = () => {
        localStorage.setItem('isLogin', 'true');
        navigate('/login/success');
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        navigate('/');
    };

    const OAUTH_REDIRECT_URI = import.meta.env.VITE_OAUTH_REDIRECT_URI;

    const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${OAUTH_REDIRECT_URI}&response_type=code`;

    const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
    const NAVER_CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;
    const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_CLIENT_SECRET}&redirect_uri=${OAUTH_REDIRECT_URI}`;

    const open = useCallback((type) => {
        const url = type === 'kakao' ? kakaoURL : naverURL;
        const left = window.screen.width / 2 - parseInt(500, 10) / 2;
        const top = window.screen.height / 2 - parseInt(600, 10) / 2;
        const loginPopup = window.open(
            url,
            `${type}LoginPopup`,
            `width=500,height=600,scrollbars=yes,resizable=no,left=${left},top=${top}`,
        );
        setPopUp(loginPopup);
    }, []);

    const close = useCallback(() => {
        if (!popUp) return;
        popUp.close();
    }, [popUp]);

    const fetchToken = useCallback(() => {
        const mockResponse = {
            jwt: 'mockJwtToken123456',
            name: 'John Doe',
            email: 'john.doe@example.com',
        };

        console.log('JWT 토큰: ', mockResponse.jwt);
        loginHandler();
    }, [loginHandler]);

    useEffect(() => {
        if (!window.opener) return;
        const openerURL = window.opener.location.href;
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get('code');
        if (code) {
            window.opener.postMessage({ code }, openerURL);
            window.close();
        }
    }, []);

    useEffect(() => {
        if (window.opener) return;
        const oAuthCodeListener = (event) => {
            if (event.origin !== window.location.origin) return;
            const { code } = event.data;
            if (code) {
                setCode(code);
                fetchToken();
                close();
            }
        };

        window.addEventListener('message', oAuthCodeListener, false);
        return () => {
            window.removeEventListener('message', oAuthCodeListener);
        };
    }, [close]);

    return { open, code, popUp, fetchToken, isLogin, logoutHandler };
};

export default useOAuthPopUp;
