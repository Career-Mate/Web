import * as S from './styled/styled';
import { useMemo } from 'react';
import { useTemplateData } from '../../../hooks/useTemplateData';
import { textTemplateData } from '../../../data/textTemplateData';
import UnderlineButton from '../Button/UnderlineButton/UnderlineButton';

const SmartTemplate = ({ jobType = 'frontend', pageType = 'skills', data: externalData, onDataChange, onClearAll }) => {
    const initialData = textTemplateData[pageType]?.[jobType] || [];
    const { handleInputChange, data, clearAll } = useTemplateData(externalData || initialData, onDataChange);
    const memoizedData = useMemo(() => data, [data]);

    const autoResize = (textarea) => {
        if (textarea) {
            textarea.style.height = '20px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    return (
        <div>
            {memoizedData.map((section, sectionIndex) => (
                <S.TemplateWrapper key={sectionIndex}>
                    <S.TemplateTitle>{section.title}</S.TemplateTitle>
                    <S.TemplateTable>
                        {section.items.map((item, itemIndex) => (
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
                                        value={item.content}
                                        placeholder={item.placeholder}
                                        onChange={(e) => handleInputChange(sectionIndex, itemIndex, e.target.value)}
                                        onInput={(e) => autoResize(e.target)}
                                    />
                                </S.TableCellData>
                            </S.TableRow>
                        ))}
                    </S.TemplateTable>
                    <S.ButtonWrapper>
                        <UnderlineButton onClick={onClearAll}>전체 내용 삭제하기</UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default SmartTemplate;
