import { FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { useTemplateData } from '../../../../hooks/useTemplateData';
import { useJobStore, useFetchUserJobType } from '../../../../store/useJobStore';
import * as S from './styled/styled';
import UnderlineButton from '../../../common/Button/UnderlineButton/UnderlineButton';

const Template = ({ pageType, onDataChange }) => {
    useFetchUserJobType();
    const jobType = useJobStore((state) => state.jobType);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [uploadedImages, setUploadedImages] = useState({});
    const [localValues, setLocalValues] = useState({});
    const [charCounts, setCharCounts] = useState({});
    const MAX_CHAR_COUNT = 300;

    const {
        data: templateData,
        handleInputChange,
        handleDateChange,
        clearAll,
        isLoading,
        isError,
    } = useTemplateData(pageType, jobType);

    useEffect(() => {
        const newLocalValues = {};
        const newCharCounts = {};
        templateData.forEach((section, sectionIndex) => {
            section.items.forEach((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                newLocalValues[key] = item.content;
                newCharCounts[key] = item.content ? item.content.length : 0;
            });
        });
        setLocalValues(newLocalValues);
        setCharCounts(newCharCounts);
    }, [templateData]);

    useEffect(() => {
        const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || {};
        setUploadedImages(savedImages);
    }, []);

    useEffect(() => {
        if (Object.keys(uploadedImages).length > 0) {
            localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));
        }
    }, [uploadedImages]);

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
        if (value.length <= MAX_CHAR_COUNT) {
            setLocalValues((prev) => ({
                ...prev,
                [`${sectionIndex}-${itemIndex}`]: value,
            }));
            setCharCounts((prev) => ({
                ...prev,
                [`${sectionIndex}-${itemIndex}`]: value.length,
            }));
        }
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

    const handleButtonClick = (id) => {
        document.getElementById(id).click();
    };

    const handleFileChange = useCallback((e, sectionIndex) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageKey = `image_${sectionIndex + 1}`;
                useTemplateStore.getState().setUploadedImages({
                    [imageKey]: reader.result,
                });
                setUploadedImages((prev) => ({
                    ...prev,
                    [imageKey]: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        } else {
            console.log('사진이 선택되지 않았습니다!');
        }
    }, []);

    const handleClearAll = useCallback(
        (sectionIndex) => {
            useTemplateStore.getState().clearAll(sectionIndex);

            const imageKey = `image_${sectionIndex + 1}`;
            const updatedImages = { ...uploadedImages };
            delete updatedImages[imageKey];

            setUploadedImages(updatedImages);
            localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
        },
        [uploadedImages],
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
                                                <S.UploadButton onClick={() => handleButtonClick(key)}>
                                                    사진 첨부
                                                </S.UploadButton>
                                                <input
                                                    id={key}
                                                    type="file"
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    onChange={(e) => handleFileChange(e, sectionIndex, itemIndex)}
                                                />
                                                {uploadedImages[`image_${sectionIndex + 1}`] && (
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <S.UploadedImg
                                                            src={uploadedImages[`image_${sectionIndex + 1}`]}
                                                            alt="Uploaded"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <>
                                                <textarea
                                                    id={key}
                                                    value={localValues[key] ?? item.content}
                                                    placeholder={
                                                        shouldShowImageUpload &&
                                                        item.label === '결과물 / 직접 디자인한 화면'
                                                            ? '(사진 첨부)'
                                                            : `${item.label}을 입력해주세요.`
                                                    }
                                                    onChange={(e) =>
                                                        handleChange(sectionIndex, itemIndex, e.target.value)
                                                    }
                                                    onBlur={() => handleBlur(sectionIndex, itemIndex)}
                                                />
                                                <S.CharCount $charCount={charCounts[key]} $maxCount={MAX_CHAR_COUNT}>
                                                    {charCounts[key] || 0}/{MAX_CHAR_COUNT}
                                                </S.CharCount>
                                            </>
                                        )}
                                    </S.TableCellData>
                                </S.TableRow>
                            );
                        })}
                    </S.TemplateTable>

                    <S.ButtonWrapper>
                        <UnderlineButton onClick={() => handleClearAll(sectionIndex)}>
                            전체 내용 삭제하기
                        </UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default Template;
