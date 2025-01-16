import { useState } from 'react';

const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);

    const loginHandler = () => {
        setIsLogin((prev) => !prev);
    };

    return {
        isLogin,
        loginHandler,
    };
};

export default useAuth;
