import { useState } from 'react';
import { textTemplateData } from '../../../data/textTemplateData';

export const useFinalSummary = () => {
    const initialData = textTemplateData['summary']['frontend'];
    const [data, setData] = useState(initialData);

    const handleSave = () => {
        alert('저장되었습니다.');
        setData([...data]);
    };

    return {
        data,
        setData,
        canSave: true,
        handleSave,
    };
};
