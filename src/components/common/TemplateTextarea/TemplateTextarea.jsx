import * as S from './styled/styled';
import { useLayoutEffect, useEffect, useRef, useState, useCallback } from 'react';

const TemplateTextarea = ({ value, placeholder, onBlur, sectionIndex, itemIndex, resetTrigger, maxCharCount }) => {
    const textareaRef = useRef(null);
    const [text, setText] = useState(value || '');
    const [charCount, setCharCount] = useState(value?.length || 0);

    const autoResize = useCallback(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '20px';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    useLayoutEffect(() => {
        autoResize();
    }, [text]);

    useEffect(() => {
        setText('');
        setCharCount(0);
    }, [resetTrigger]);

    useEffect(() => {
        if (value !== undefined) {
            setText(value);
            setCharCount(value?.length || 0);
        }
    }, [value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue.length <= maxCharCount) {
            setText(newValue);
            setCharCount(newValue.length);
        }
    };

    const handleBlur = () => {
        onBlur(sectionIndex, itemIndex, text);
    };

    return (
        <>
            <S.StyledTextarea
                ref={textareaRef}
                value={text}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <S.CharCount $charCount={charCount} $maxCount={maxCharCount}>
                {charCount}/{maxCharCount}
            </S.CharCount>
        </>
    );
};

export default TemplateTextarea;
