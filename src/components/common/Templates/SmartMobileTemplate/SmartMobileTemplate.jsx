import * as S from './styled/styled';
import { useMemo, useState, useEffect } from 'react';
import UnderlineButton from '../../Button/UnderlineButton/UnderlineButton';
import { handleTemplateChange } from '../../../../utils/SmartPlanner/plannerHandler';
import MobileTextarea from '../../MobileTextarea/MobileTextarea';
import TemplateTextarea from '../../TemplateTextarea/TemplateTextarea';

const SmartMobileTemplate = ({ data, onDataChange, onClearAll, page }) => {
    const memoizedData = useMemo(() => data, [data]);

    const [resetTrigger, setResetTrigger] = useState(false);

    const MAX_CHAR_COUNT = 300;

    const getKey = (sectionIndex, itemIndex) => `${sectionIndex}-${itemIndex}`;

    const handleBlur = (sectionIndex, itemIndex, value) => {
        handleTemplateChange(data, sectionIndex, itemIndex, onDataChange, value);
    };

    const handleClearAll = () => {
        onClearAll();
        setResetTrigger((prev) => !prev);
    };

    return (
        <div>
            {memoizedData.map((section, sectionIndex) => (
                <S.TemplateWrapper key={sectionIndex}>
                    <S.TemplateTitle>{section.title}</S.TemplateTitle>
                    {section.items.map((item, itemIndex) => (
                        <S.SectionWrapper key={itemIndex}>
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
                    ))}
                    <S.ButtonWrapper>
                        <UnderlineButton fontSize="12px" onClick={handleClearAll}>
                            전체 내용 삭제하기
                        </UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default SmartMobileTemplate;
