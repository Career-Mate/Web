import * as S from './styled/styled';
import { useMemo, useState, useEffect, useRef } from 'react';
import { useTemplateData } from '../../../../hooks/useTemplateData';
import UnderlineButton from '../../Button/UnderlineButton/UnderlineButton';

const SmartTemplate = ({ data: externalData, onDataChange, onClearAll, page }) => {
    const { handleInputChange, data } = useTemplateData(externalData, onDataChange);
    const memoizedData = useMemo(() => data, [data]);
    const [localValues, setLocalValues] = useState({});
    const [charCounts, setCharCounts] = useState({});

    const MAX_CHAR_COUNT = 1000;

    const autoResize = (textarea) => {
        if (textarea) {
            textarea.style.height = '20px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        document.querySelectorAll('textarea').forEach((textarea) => {
            autoResize(textarea);
        });
        memoizedData.forEach((section, sectionIndex) => {
            section.items.forEach((item, itemIndex) => {
                const key = `${page}-${sectionIndex}-${itemIndex}`;
                setCharCounts((prev) => ({
                    ...prev,
                    [key]: item.content.length,
                }));
            });
        });
    }, [memoizedData]);

    const handleChange = (sectionIndex, itemIndex, value) => {
        const key = `${page}-${sectionIndex}-${itemIndex}`;
        if (value.length <= MAX_CHAR_COUNT) {
            setLocalValues((prev) => ({
                ...prev,
                [key]: value,
            }));
            setCharCounts((prev) => ({
                ...prev,
                [key]: value.length,
            }));
        }
    };

    const handleBlur = (sectionIndex, itemIndex) => {
        const key = `${page}-${sectionIndex}-${itemIndex}`;
        if (localValues[key] !== undefined) {
            handleInputChange(sectionIndex, itemIndex, localValues[key]);
        }
    };

    const handleClearAllWrapper = () => {
        onClearAll();
        setLocalValues({});
        setCharCounts({});
    };

    return (
        <div>
            {memoizedData.map((section, sectionIndex) => (
                <S.TemplateWrapper key={sectionIndex}>
                    <S.TemplateTitle>{section.title}</S.TemplateTitle>
                    {section.items.map((item, itemIndex) => {
                        const key = `${page}-${sectionIndex}-${itemIndex}`;
                        return (
                            <S.SectionWrapper>
                                <S.SectionLabel>{item.label}</S.SectionLabel>
                                <S.TextareaWrapper>
                                    <S.StyledTextarea
                                        value={localValues[key] ?? item.content}
                                        placeholder={item.placeholder}
                                        onChange={(e) => {
                                            handleChange(sectionIndex, itemIndex, e.target.value);
                                            autoResize(e.target);
                                        }}
                                        onBlur={() => handleBlur(sectionIndex, itemIndex)}
                                    />
                                    <S.CharCount $charCount={charCounts[key]} $maxCount={MAX_CHAR_COUNT}>
                                        {charCounts[key] || 0}/{MAX_CHAR_COUNT}
                                    </S.CharCount>
                                </S.TextareaWrapper>
                            </S.SectionWrapper>
                        );
                    })}
                    <S.ButtonWrapper>
                        <UnderlineButton onClick={handleClearAllWrapper}>전체 내용 삭제하기</UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default SmartTemplate;
