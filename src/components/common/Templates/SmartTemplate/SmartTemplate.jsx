import * as S from './styled/styled';
import { useMemo, useState, useEffect } from 'react';
import UnderlineButton from '../../Button/UnderlineButton/UnderlineButton';
import TemplateTextarea from '../../TemplateTextarea/TemplateTextarea';
import { handleTemplateChange } from '../../../../utils/SmartPlanner/plannerHandler';
import useIsMobileScreen from '../../../../hooks/useIsMobileScreen';
const SmartTemplate = ({ data, onDataChange, onClearAll }) => {
    const memoizedData = useMemo(() => data, [data]);
    const [resetTrigger, setResetTrigger] = useState(false);

    const isMobileScreen = useIsMobileScreen(430);

    const MAX_CHAR_COUNT = 300;

    const getKey = (sectionIndex, itemIndex) => `${sectionIndex}-${itemIndex}`;

    const handleBlur = (sectionIndex, itemIndex, value) => {
        handleTemplateChange(data, sectionIndex, itemIndex, onDataChange, value);
    };

    const handleClearAllWrapper = () => {
        onClearAll();
        setResetTrigger((prev) => !prev);
    };

    const renderMobileTemplate = ({ section, sectionIndex }) =>
        section?.items.map((item, itemIndex) => (
            <S.SectionWrapper>
                {item.label && <S.SectionLabel>{item.label}</S.SectionLabel>}
                <S.TextareaWrapper>
                    <TemplateTextarea
                        key={getKey(sectionIndex, itemIndex)}
                        sectionIndex={sectionIndex}
                        itemIndex={itemIndex}
                        value={item.content}
                        placeholder={item.placeholder}
                        onBlur={handleBlur}
                        resetTrigger={resetTrigger}
                        maxCharCount={MAX_CHAR_COUNT}
                    />
                </S.TextareaWrapper>
            </S.SectionWrapper>
        ));

    const renderTableTemplate = ({ section, sectionIndex }) => (
        <S.TemplateTable>
            {section?.items.map((item, itemIndex) => (
                <S.TableRow key={itemIndex}>
                    <S.TableCellHeader
                        data-component="TableCellHeader"
                        isFirstRow={itemIndex === 0}
                        isLastRow={itemIndex === section.items.length - 1}
                    >
                        {item.label}
                    </S.TableCellHeader>
                    <S.TableCellData isFirstRow={itemIndex === 0} isLastRow={itemIndex === section.items.length - 1}>
                        <TemplateTextarea
                            key={getKey(sectionIndex, itemIndex)}
                            sectionIndex={sectionIndex}
                            itemIndex={itemIndex}
                            value={item.content}
                            placeholder={item.placeholder}
                            onBlur={handleBlur}
                            resetTrigger={resetTrigger}
                            maxCharCount={MAX_CHAR_COUNT}
                        />
                    </S.TableCellData>
                </S.TableRow>
            ))}
        </S.TemplateTable>
    );
    return (
        <div>
            {memoizedData.map((section, sectionIndex) => (
                <S.TemplateWrapper key={sectionIndex}>
                    <S.TemplateTitle>{section.title}</S.TemplateTitle>
                    {isMobileScreen
                        ? renderMobileTemplate({ section, sectionIndex })
                        : renderTableTemplate({ section, sectionIndex })}
                    <S.ButtonWrapper>
                        <UnderlineButton onClick={handleClearAllWrapper}>전체 내용 삭제하기</UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default SmartTemplate;
