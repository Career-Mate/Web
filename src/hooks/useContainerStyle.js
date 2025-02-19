import useIsMobileScreen from './useIsMobileScreen';

const styles = {
    mobile: {
        width: '280px',
        height: 'fit-content',
        mainFontSize: '16px',
        detailFontSize: '9px',
        button: {
            full: {
                buttonWidth: '232px',
                buttonHeight: '39px',
                buttonFontSize: '12px',
            },
            half: {
                buttonWidth: '232px',
                buttonHeight: '39px',
                buttonFontSize: '12px',
            },
        },
    },
    tablet: {
        width: '600px',
        height: 'fit-content',
        mainFontSize: '24px',
        detailFontSize: '16px',

        button: {
            full: {
                buttonWidth: '360px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            },
            half: {
                buttonWidth: '260px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            },
        },
    },
    web: {
        width: '800px',
        height: 'fit-content',
        mainFontSize: '26px',
        detailFontSize: '20px',
        button: {
            full: {
                buttonWidth: '500px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            },
            half: {
                buttonWidth: '330px',
                buttonHeight: '57px',
                buttonFontSize: '18px',
            },
        },
    },
};

const useContainerStyle = (buttonStyle = 'full') => {
    const isMobileScreen = useIsMobileScreen(430);
    const isTabletScreen = useIsMobileScreen(1024);

    if (isMobileScreen) {
        return {
            ...styles.mobile,
            button: styles.mobile.button[buttonStyle],
        };
    }

    if (isTabletScreen) {
        return {
            ...styles.tablet,
            button: styles.tablet.button[buttonStyle],
        };
    }

    return {
        ...styles.web,
        button: styles.web.button[buttonStyle],
    };
};

export default useContainerStyle;
