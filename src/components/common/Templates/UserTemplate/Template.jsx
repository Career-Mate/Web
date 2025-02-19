import { FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { useTemplateData } from '../../../../hooks/useTemplateData';
import { useJobStore, useFetchUserJobType } from '../../../../store/useJobStore';
import * as S from './styled/styled';
import UnderlineButton from '../../../common/Button/UnderlineButton/UnderlineButton';
import TemplateTextarea from '../../TemplateTextarea/TemplateTextarea';
import CalendarPicker from '../../Input/CalendarPicker/CalendarPicker';

const Template = ({ pageType, onDataChange }) => {
    useFetchUserJobType();
    const jobType = useJobStore((state) => state.jobType);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [uploadedImages, setUploadedImages] = useState({});
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

    const handleBlur = (sectionIndex, itemIndex, value) => {
        handleInputChange(sectionIndex, itemIndex, value);
    };

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
                                            <CalendarPicker
                                                width={'400px'}
                                                mobileWidth={'200px'}
                                                startDate={item.startDate ?? null}
                                                endDate={item.endDate ?? null}
                                                onStartDateChange={(date) =>
                                                    handleDateChange(sectionIndex, itemIndex, date, true)
                                                }
                                                onEndDateChange={(date) =>
                                                    handleDateChange(sectionIndex, itemIndex, date, false)
                                                }
                                            />
                                        ) : shouldShowImageUpload && item.label === '결과물 / 직접 디자인한 화면' ? (
                                            <S.UploadContainer>
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
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <S.UploadedImg
                                                            src={uploadedImages[`image_${sectionIndex + 1}`]}
                                                            alt="Uploaded"
                                                        />
                                                    </div>
                                                )}
                                            </S.UploadContainer>
                                        ) : (
                                            <>
                                                <TemplateTextarea
                                                    value={item.content}
                                                    sectionIndex={sectionIndex}
                                                    itemIndex={itemIndex}
                                                    placeholder={
                                                        shouldShowImageUpload &&
                                                        item.label === '결과물 / 직접 디자인한 화면'
                                                            ? '(사진 첨부)'
                                                            : `${item.label}을 입력해주세요.`
                                                    }
                                                    onBlur={handleBlur}
                                                    maxCharCount={MAX_CHAR_COUNT}
                                                />
                                            </>
                                        )}
                                    </S.TableCellData>
                                </S.TableRow>
                            );
                        })}
                    </S.TemplateTable>

                    <S.ButtonWrapper>
                        <UnderlineButton onClick={() => handleClearAll(sectionIndex)} fontSize={'10px'}>
                            전체 내용 삭제하기
                        </UnderlineButton>
                    </S.ButtonWrapper>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default Template;
