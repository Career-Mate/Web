import { FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { useTemplateData } from '../../../hooks/useTemplateData';
import { useJobStore, useFetchUserJobType } from '../../../store/useJobStore';
import * as S from './styled/styled';
import UnderlineButton from '../Button/UnderlineButton/UnderlineButton';

const Template = ({ pageType, onDataChange }) => {
    useFetchUserJobType();
    const jobType = useJobStore((state) => state.jobType);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const {
        data: templateData,
        handleInputChange,
        handleDateChange,
        clearAll,
        isLoading,
        isError,
    } = useTemplateData(pageType, jobType);

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

    const generateTooltipText = useCallback((section) => {
        const labels = section.items
            .slice(0, 4)
            .map((item, index) => `${index + 1}) ${item.label}`)
            .join('\n');
        return `${labels}은 꼭 입력해주세요!`;
    }, []);

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

    const shouldShowImageUpload = jobType === 'Designer' && pageType === 'PROJECT_EXPERIENCE';

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
                        {section.items.map((item, itemIndex) => {
                            const key = `${sectionIndex}-${itemIndex}`;
                            return (
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
                                        ) : shouldShowImageUpload && item.label === '결과물 / 직접 디자인한 화면' ? (
                                            <div>
                                                <label htmlFor="imageUpload">
                                                    <S.UploadButton>사진 첨부</S.UploadButton>
                                                </label>
                                                <input
                                                    id="imageUpload"
                                                    type="file"
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    onChange={(e) =>
                                                        setUploadedImage(URL.createObjectURL(e.target.files[0]))
                                                    }
                                                />
                                                {uploadedImage && (
                                                    <img
                                                        src={uploadedImage}
                                                        alt="Uploaded"
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <textarea
                                                id={key}
                                                value={localValues[key] ?? item.content}
                                                placeholder={
                                                    shouldShowImageUpload &&
                                                    item.label === '결과물 / 직접 디자인한 화면'
                                                        ? '(사진 첨부)'
                                                        : `${item.label}를 입력해주세요.`
                                                }
                                                onChange={(e) => handleChange(sectionIndex, itemIndex, e.target.value)}
                                                onBlur={() => handleBlur(sectionIndex, itemIndex)}
                                            />
                                        )}
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

export default Template;
