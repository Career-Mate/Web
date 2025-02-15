import { useState, useEffect } from 'react';

const useIsMobileScreen = (breakpoint = 430) => {
    const [isMobileScreen, setIsMobileScreen] = useState(() => window.outerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.outerWidth <= breakpoint);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobileScreen;
};

export default useIsMobileScreen;
