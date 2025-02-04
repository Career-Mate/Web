import * as S from './styled/styled';
import { useMemo, useState,useEffect,useRef } from 'react';
import { useTemplateData } from '../../../hooks/useTemplateData';
import UnderlineButton from '../Button/UnderlineButton/UnderlineButton';

const SmartTemplate = ({ data: externalData, onDataChange, onClearAll }) => {
    const { handleInputChange, data } = useTemplateData(externalData, onDataChange);
    const memoizedData = useMemo(() => data, [data]);
    const [localValues, setLocalValues] = useState({});
    const textareaRefs = useRef([]);

    const autoResize = (textarea) => {
        if (textarea) {
            textarea.style.height = '20px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };
    useEffect(() => {
        textareaRefs.current.forEach((textarea) => autoResize(textarea));
    }, [data])

    const handleChange = (sectionIndex, itemIndex, value) => {
        setLocalValues((prev) => ({
            ...prev,
            [`${sectionIndex}-${itemIndex}`]: value,
        }));
    };

    const handleBlur = (sectionIndex, itemIndex) => {
        const key = `${sectionIndex}-${itemIndex}`;
        if (localValues[key] !== undefined) {
            handleInputChange(sectionIndex, itemIndex, localValues[key]);
        }
    };

    const handleClearAllWrapper = () => {
        onClearAll();
        setLocalValues({});
    };

    return (
        <div>
            {memoizedData.map((section, sectionIndex) => (
                <S.TemplateWrapper key={sectionIndex}>
                    <S.TemplateTitle>{section.title}</S.TemplateTitle>
                    <S.TemplateTable>
                        {section.items.map((item, itemIndex) => {
                            const key = `${sectionIndex}-${itemIndex}`;
                            return (
                                <S.TableRow key={itemIndex}>
                                    <S.TableCellHeader
                                        data-component="TableCellHeader"
                                        isFirstRow={itemIndex === 0}
                                        isLastRow={itemIndex === section.items.length - 1}
                                    >
                                        {item.label}
                                    </S.TableCellHeader>
                                    <S.TableCellData
                                        isFirstRow={itemIndex === 0}
                                        isLastRow={itemIndex === section.items.length - 1}
                                    >
                                        <textarea
                                            value={localValues[key] ?? item.content}
                                            ref={(el) => textareaRefs.current.push(el)}
                                            placeholder={item.placeholder}
                                            onChange={(e) => {
                                                handleChange(sectionIndex, itemIndex, e.target.value);
                                                autoResize(e.target);
                                            }}
                                            onBlur={() => handleBlur(sectionIndex, itemIndex)}
                                        />
                                    </S.TableCellData>
                                </S.TableRow>
                            );
                        })}
                    </S.TemplateTable>
                    <S.ButtonWrapper>
                        <UnderlineButton onClick={handleClearAllWrapper}>전체 내용 삭제하기</UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default SmartTemplate;
