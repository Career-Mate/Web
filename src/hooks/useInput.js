import { useState } from 'react';

const useInput = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue('');
    };

    return { value, onChange, reset };
};

export default useInput;
