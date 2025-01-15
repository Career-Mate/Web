import * as S from './styled/styled';
import { useTemplateData, textTemplateInitialData } from '../../../hooks/useTemplateData';

const TextTemplate = () => {
    const { handleInputChange, data } = useTemplateData(textTemplateInitialData);
    const autoResize = (textarea) => {
        if (textarea) {
            textarea.style.height = '20px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    return (
        <div>
            {data.map((section, sectionIndex) => (
                <S.TemplateWrapper key={sectionIndex}>
                    <S.TemplateTitle>{section.title}</S.TemplateTitle>
                    <S.TemplateTable>
                        {section.items.map((item, itemIndex) => (
                            <S.TableRow key={itemIndex}>
                                <S.TableCellHeader
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
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default TextTemplate;
