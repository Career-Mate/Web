import ProfileInput from '../common/Input/ProfileInput';
import CalendarInput from '../common/Input/CalendarInput/CalendarInput';
import SmartTemplate from '../common/Templates/SmartTemplate/SmartTemplate';
import React from 'react';
import { handleDateChange, handleInputChange, handleClearAll } from '../../utils/SmartPlanner/plannerHandler';
import * as S from './styled/styled';

import TemplateTextarea from '../common/TemplateTextarea/TemplateTextarea';
import useIsMobileScreen from '../../hooks/useIsMobileScreen';

const SmartPlanner = ({ data, onDataChange, page }) => {
    const isMobileScreen = useIsMobileScreen(430);
    return (
        <S.Container>
            <S.InputContainer>
                {isMobileScreen ? (
                    <S.SectionWrapper>
                        <S.SectionLabel>활동명</S.SectionLabel>
                        <S.TextareaWrapper>
                            <TemplateTextarea
                                sectionIndex={page}
                                itemIndex={null}
                                value={data[page]?.activityName || ''}
                                placeholder={'활동명을 입력하세요'}
                                onBlur={(sectionIndex, _, value) =>
                                    handleInputChange(data, onDataChange, sectionIndex, value)
                                }
                                maxCharCount={100}
                            />
                        </S.TextareaWrapper>
                    </S.SectionWrapper>
                ) : (
                    <ProfileInput
                        label={'활동명'}
                        placeholder={'활동명을 입력하세요'}
                        defaultValue={data[page]?.activityName || ''}
                        onBlur={(value) => handleInputChange(data, onDataChange, page, value)}
                    />
                )}

                <CalendarInput
                    label="목표 달성 기간"
                    startDate={data[page]?.goalPeriod?.startDate || null}
                    endDate={data[page]?.goalPeriod?.endDate || null}
                    onStartDateChange={(date) => handleDateChange(data, onDataChange, page, true, date)}
                    onEndDateChange={(date) => handleDateChange(data, onDataChange, page, false, date)}
                />
            </S.InputContainer>
            <SmartTemplate
                data={[data[page]]}
                onClearAll={() => handleClearAll(onDataChange, page)}
                onDataChange={(updatedArray) =>
                    onDataChange((prevData) => {
                        const newData = [...prevData];
                        newData[page] = updatedArray[0];
                        return newData;
                    })
                }
            />
        </S.Container>
    );
};

export default React.memo(SmartPlanner);
