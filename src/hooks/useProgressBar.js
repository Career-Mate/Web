// hooks/usePagination.js
import { useState } from 'react';

const useProgressBar = (initialProgression = 0) => {
    const [progression, setProgression] = useState(initialProgression);

    const nextSummaryProgress = () => {
        if (progression < 5) {
            setProgression((prev) => prev + 1);
        }
    };

    const prevSummaryProgress = () => {
        if (progression > 0) {
            setProgression((prev) => prev - 1);
        }
    };

    const nextModifyProgress = () => {
        if (progression === 4) {
            setProgression((prev) => prev + 1);
        } else if (progression < 4) {
            setProgression((prev) => prev + 2);
        }
    };

    const prevModifyProgress = () => {
        if (progression === 5) {
            setProgression((prev) => prev - 1);
        } else if (progression > 0) {
            setProgression((prev) => prev - 2);
        }
    };

    return { progression, nextSummaryProgress, prevSummaryProgress, nextModifyProgress, prevModifyProgress };
};

export default useProgressBar;
