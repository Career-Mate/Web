import * as S from './styled/styled';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { useTemplateData } from '../../../../hooks/useTemplateData';
import { useJobStore, useFetchUserJobType } from '../../../../store/useJobStore';
import UnderlineButton from '../../../common/Button/UnderlineButton/UnderlineButton';

const TextTemplate = ({ pageType }) => {
    useFetchUserJobType();
    const jobType = useJobStore((state) => state.jobType);
    const { handleInputChange, data: templateData, clearAll, isLoading, isError } = useTemplateData(pageType, jobType);

    const [localValues, setLocalValues] = useState({});

    useEffect(() => {
        const newLocalValues = {};
        templateData.forEach((section, sectionIndex) => {
            section.items.forEach((item, itemIndex) => {
                newLocalValues[`${sectionIndex}-${itemIndex}`] = item.content;
            });
        });
        setLocalValues(newLocalValues);
    }, [templateData]);

    const memoizedData = useMemo(() => {
        return templateData.length >= 2
            ? templateData
            : [...templateData, ...Array(2 - templateData.length).fill({ items: [] })];
    }, [templateData]);

    const autoResize = useCallback((textarea) => {
        if (textarea) {
            textarea.style.height = '20px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, []);

    const handleChange = useCallback((sectionIndex, itemIndex, value) => {
        setLocalValues((prev) => ({
            ...prev,
            [`${sectionIndex}-${itemIndex}`]: value,
        }));
    }, []);

    const handleBlur = useCallback(
        (sectionIndex, itemIndex) => {
            const key = `${sectionIndex}-${itemIndex}`;
            if (localValues[key] !== undefined) {
                handleInputChange(sectionIndex, itemIndex, localValues[key]);
            }
            autoResize(document.getElementById(key));
        },
        [handleInputChange, localValues, autoResize],
    );

    if (isLoading) {
        return <p>로딩 중...</p>;
    }

    if (isError) {
        return <p>데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.</p>;
    }

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
                                            id={key}
                                            value={localValues[key] ?? item.content}
                                            placeholder={
                                                pageType === 'SUMMARY'
                                                    ? '내용을 입력해주세요.'
                                                    : (item.placeholder ?? `${item.label}을 입력해주세요.`)
                                            }
                                            onChange={(e) => handleChange(sectionIndex, itemIndex, e.target.value)}
                                            onBlur={() => handleBlur(sectionIndex, itemIndex)}
                                            onInput={(e) => autoResize(e.target)}
                                        />
                                    </S.TableCellData>
                                </S.TableRow>
                            );
                        })}
                    </S.TemplateTable>
                    <S.ButtonWrapper>
                        <UnderlineButton onClick={() => clearAll(sectionIndex)}>전체 내용 삭제하기</UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default TextTemplate;
