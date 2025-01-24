import { FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTemplateData } from '../../../hooks/useTemplateData';
import { jobTemplateData } from '../../../data/jobTemplateData';
import * as S from './styled/styled';
import UnderlineButton from '../Button/UnderlineButton/UnderlineButton';

const Template = ({ jobType = 'frontend', pageType = 'internExperience', data: externalData, onDataChange }) => {
    const initialData = jobTemplateData[pageType]?.[jobType] || [];
    const {
        tooltipVisible,
        setTooltipVisible,
        handleInputChange,
        data,
        handleDateChange,
        generateTooltipText,
        clearAll,
    } = useTemplateData(externalData || initialData, onDataChange);

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
                                                    selected={
                                                        item.startDate instanceof Date &&
                                                        !isNaN(item.startDate.getTime())
                                                            ? item.startDate
                                                            : null
                                                    }
                                                    onChange={(date) =>
                                                        handleDateChange(sectionIndex, itemIndex, date, true)
                                                    }
                                                    selectsStart
                                                    startDate={
                                                        item.startDate instanceof Date &&
                                                        !isNaN(item.startDate.getTime())
                                                            ? item.startDate
                                                            : null
                                                    }
                                                    endDate={
                                                        item.endDate instanceof Date && !isNaN(item.endDate.getTime())
                                                            ? item.endDate
                                                            : null
                                                    }
                                                    placeholderText="시작 날짜를 선택해주세요"
                                                    dateFormat="yyyy년 MM월 dd일"
                                                />
                                            </S.DateInput>

                                            <S.DateDivider>|</S.DateDivider>

                                            <S.DateInput isInline>
                                                <FaCalendarAlt className="calendar-icon" />
                                                <DatePicker
                                                    selected={
                                                        item.endDate instanceof Date && !isNaN(item.endDate.getTime())
                                                            ? item.endDate
                                                            : null
                                                    }
                                                    onChange={(date) =>
                                                        handleDateChange(sectionIndex, itemIndex, date, false)
                                                    }
                                                    selectsEnd
                                                    startDate={
                                                        item.startDate instanceof Date &&
                                                        !isNaN(item.startDate.getTime())
                                                            ? item.startDate
                                                            : null
                                                    }
                                                    endDate={
                                                        item.endDate instanceof Date && !isNaN(item.endDate.getTime())
                                                            ? item.endDate
                                                            : null
                                                    }
                                                    minDate={
                                                        item.startDate instanceof Date &&
                                                        !isNaN(item.startDate.getTime())
                                                            ? item.startDate
                                                            : null
                                                    }
                                                    placeholderText="종료 날짜를 선택해주세요"
                                                    dateFormat="yyyy년 MM월 dd일"
                                                />
                                            </S.DateInput>
                                        </S.DatePickerRow>
                                    ) : (
                                        <textarea
                                            value={item.content}
                                            placeholder={item.placeholder}
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
