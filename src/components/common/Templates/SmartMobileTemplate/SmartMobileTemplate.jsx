import * as S from './styled/styled';
import { useMemo, useState, useEffect } from 'react';
import UnderlineButton from '../../Button/UnderlineButton/UnderlineButton';
import { handleTemplateChange } from '../../../../utils/SmartPlanner/plannerHandler';
import MobileTextarea from '../../MobileTextarea/MobileTextarea';

const MAX_CHAR_COUNT = 1000;

const SmartMobileTemplate = ({ data, onDataChange, onClearAll, page }) => {
    const memoizedData = useMemo(() => data, [data]);
    const [localValues, setLocalValues] = useState({});

    useEffect(() => {
        setLocalValues({});
    }, [page]);

    const getKey = (sectionIndex, itemIndex) => `${sectionIndex}-${itemIndex}`;

    const handleChange = (sectionIndex, itemIndex, value) => {
        if (value.length > MAX_CHAR_COUNT) return;
        setLocalValues((prev) => ({
            ...prev,
            [getKey(sectionIndex, itemIndex)]: value,
        }));
    };

    const handleBlur = (sectionIndex, itemIndex) => {
        const key = getKey(sectionIndex, itemIndex);
        if (localValues[key] !== undefined) {
            handleTemplateChange(data, sectionIndex, itemIndex, onDataChange, localValues[key]);
        }
    };

    const handleClearAll = () => {
        onClearAll();
        setLocalValues({});
    };

    return (
        <div>
            {memoizedData.map((section, sectionIndex) => (
                <S.TemplateWrapper key={sectionIndex}>
                    <S.TemplateTitle>{section.title}</S.TemplateTitle>
                    {section.items.map((item, itemIndex) => {
                        const key = getKey(sectionIndex, itemIndex);
                        return (
                            <MobileTextarea
                                key={key}
                                sectionIndex={sectionIndex}
                                itemIndex={itemIndex}
                                label={item.label}
                                value={localValues[key] ?? item.content}
                                placeholder={item.placeholder}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        );
                    })}
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
