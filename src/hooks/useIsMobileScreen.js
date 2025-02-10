import { useState, useEffect } from 'react';

const useIsMobileScreen = (breakpoint = 390) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.outerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.outerWidth <= breakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isLargeScreen;
};

export default useIsMobileScreen;
