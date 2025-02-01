import { FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMemo, useState, useCallback } from 'react';
import { useTemplateData } from '../../../apis/CareerTemplate/useTemplateData';
import { useJobStore, useFetchUserJobType } from '../../../store/useJobStore';
import * as S from './styled/styled';
import UnderlineButton from '../Button/UnderlineButton/UnderlineButton';

const Template = ({ pageType, onDataChange }) => {
    console.log(`현재 페이지 타입: ${pageType}`);
    useFetchUserJobType();

    // jobType 가져오기
    const jobType = useJobStore((state) => state.jobType);
    console.log(`선택된 직무: ${jobType}`);

    const [tooltipVisible, setTooltipVisible] = useState(false);

    // API에서 데이터 가져오기
    const {
        data: templateData,
        handleInputChange,
        handleDateChange,
        clearAll,
        isLoading,
        isError,
    } = useTemplateData(pageType, jobType);

    const memoizedData = useMemo(() => {
        return templateData.length >= 2
            ? templateData
            : [...templateData, ...Array(2 - templateData.length).fill({ items: [] })];
    }, [templateData]);

    const generateTooltipText = useCallback((section) => {
        const labels = section.items
            .slice(0, 4)
            .map((item, index) => `${index + 1}) ${item.label}`)
            .join('\n');
        return `${labels}은 꼭 입력해주세요!`;
    }, []);

    const autoResize = (textarea) => {
        if (textarea) {
            textarea.style.height = '20px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

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
                    <S.TemplateTitle style={{ display: 'none' }}>{section.title}</S.TemplateTitle>

                    <S.TemplateTable>
                        {section.items.map((item, itemIndex) => (
                            <S.TableRow key={itemIndex}>
                                <S.TableCellHeader
                                    isFirstRow={itemIndex === 0}
                                    isLastRow={itemIndex === section.items.length - 1}
                                >
                                    {item.label}

                                    {itemIndex === 0 && (
                                        <S.IconWrapper
                                            onMouseEnter={() => setTooltipVisible(true)}
                                            onMouseLeave={() => setTooltipVisible(false)}
                                        >
                                            <FaExclamationCircle />
                                            {tooltipVisible && (
                                                <S.Tooltip>
                                                    <S.TooltipText>{generateTooltipText(section)}</S.TooltipText>
                                                </S.Tooltip>
                                            )}
                                        </S.IconWrapper>
                                    )}
                                </S.TableCellHeader>
                                <S.TableCellData
                                    isFirstRow={itemIndex === 0}
                                    isLastRow={itemIndex === section.items.length - 1}
                                >
                                    {item.type === 'date' ? (
                                        <S.DatePickerRow>
                                            <S.DateInput isInline>
                                                <FaCalendarAlt className="calendar-icon" />
                                                <DatePicker
                                                    selected={item.startDate ?? null}
                                                    onChange={(date) =>
                                                        handleDateChange(sectionIndex, itemIndex, date, true)
                                                    }
                                                    selectsStart
                                                    startDate={item.startDate ?? null}
                                                    endDate={item.endDate ?? null}
                                                    placeholderText="시작 날짜를 선택해주세요"
                                                    dateFormat="yyyy년 MM월 dd일"
                                                />
                                            </S.DateInput>

                                            <S.DateDivider>|</S.DateDivider>

                                            <S.DateInput isInline>
                                                <FaCalendarAlt className="calendar-icon" />
                                                <DatePicker
                                                    selected={item.endDate ?? null}
                                                    onChange={(date) =>
                                                        handleDateChange(sectionIndex, itemIndex, date, false)
                                                    }
                                                    selectsEnd
                                                    startDate={item.startDate ?? null}
                                                    endDate={item.endDate ?? null}
                                                    minDate={item.startDate ?? null}
                                                    placeholderText="종료 날짜를 선택해주세요"
                                                    dateFormat="yyyy년 MM월 dd일"
                                                />
                                            </S.DateInput>
                                        </S.DatePickerRow>
                                    ) : (
                                        <textarea
                                            value={item.content ?? ''}
                                            placeholder={item.placeholder ?? `${item.label}를 입력해주세요.`}
                                            onChange={(e) => handleInputChange(sectionIndex, itemIndex, e.target.value)}
                                            onInput={(e) => autoResize(e.target)}
                                        />
                                    )}
                                </S.TableCellData>
                            </S.TableRow>
                        ))}
                    </S.TemplateTable>

                    <S.ButtonWrapper>
                        <UnderlineButton onClick={() => clearAll(sectionIndex)}>전체 내용 삭제하기</UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default Template;
