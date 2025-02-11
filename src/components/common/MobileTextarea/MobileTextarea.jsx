import * as S from './styled/styled';
import { useLayoutEffect, useEffect, useRef, useState, useCallback } from 'react';

const MAX_CHAR_COUNT = 1000;

const MobileTextarea = ({ label, value, placeholder, onChange, onBlur, sectionIndex = null, itemIndex = null }) => {
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
        setText(value || '');
        setCharCount(value?.length || 0);
    }, [value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue.length <= MAX_CHAR_COUNT) {
            setText(newValue);
            setCharCount(newValue.length);

            if (sectionIndex !== null && itemIndex !== null) {
                onChange?.(sectionIndex, itemIndex, newValue);
            }

            autoResize();
        }
    };

    const handleBlur = () => {
        if (sectionIndex !== null && itemIndex !== null) {
            onBlur?.(sectionIndex, itemIndex, text);
        } else {
            onBlur?.(text);
        }
    };

    return (
        <S.SectionWrapper>
            {label && <S.SectionLabel>{label}</S.SectionLabel>}
            <S.TextareaWrapper>
                <S.StyledTextarea
                    ref={textareaRef}
                    value={text}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <S.CharCount $charCount={charCount} $maxCount={MAX_CHAR_COUNT}>
                    {charCount}/{MAX_CHAR_COUNT}
                </S.CharCount>
            </S.TextareaWrapper>
        </S.SectionWrapper>
    );
};

export default MobileTextarea;
