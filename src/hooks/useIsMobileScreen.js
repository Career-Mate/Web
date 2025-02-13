import { useState, useEffect } from 'react';

const useIsMobileScreen = (breakpoint = 390) => {
    const [isMobileScreen, setIsMobileScreen] = useState(() => window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= breakpoint);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobileScreen;
};

export default useIsMobileScreen;
