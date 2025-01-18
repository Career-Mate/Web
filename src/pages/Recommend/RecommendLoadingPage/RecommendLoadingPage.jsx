import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import * as S1 from './styled/firstStyled';
import * as S2 from './styled/secondStyled';
import LoadingPopup from '../../../components/common/Popups/LoadingPopup/LoadingPopup';
import { data as initialData, textTemplateData } from './data';

const RecommendLoadingPage = () => {
    const [data, setData] = useState(initialData);

    const [isPopupVisible, setIsPopupVisible] = useState(true);

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            {isPopupVisible && (
                <LoadingPopup userName="김단아" interestJob="프론트엔드 개발자" type="template" onCancel={closePopup} />
            )}

            {data.map((section, sectionIndex) => (
                <S1.TemplateWrapper key={sectionIndex} isFirst={sectionIndex === 0}>
                    <S1.TemplateTitle>{section.title}</S1.TemplateTitle>
                    <S1.TemplateTable>
                        {section.items.map((item, itemIndex) => (
                            <S1.TableRow key={itemIndex}>
                                <S1.TableCellHeader>{item.label}</S1.TableCellHeader>
                                <S1.TableCellData>
                                    {item.type === 'text' ? (
                                        <textarea value={item.content} readOnly />
                                    ) : (
                                        <S1.DatePickerRow>
                                            <S1.DateInput>
                                                <FaCalendarAlt className="calendar-icon" />
                                                <DatePicker
                                                    selected={item.startDate}
                                                    readOnly
                                                    dateFormat="yyyy-MM-dd"
                                                />
                                            </S1.DateInput>
                                            <S1.DateDivider>|</S1.DateDivider>
                                            <S1.DateInput>
                                                <FaCalendarAlt className="calendar-icon" />
                                                <DatePicker selected={item.endDate} readOnly dateFormat="yyyy-MM-dd" />
                                            </S1.DateInput>
                                        </S1.DatePickerRow>
                                    )}
                                </S1.TableCellData>
                            </S1.TableRow>
                        ))}
                    </S1.TemplateTable>
                </S1.TemplateWrapper>
            ))}

            <S2.TemplateWrapper>
                <S2.TemplateTitle>5. 최종 정리</S2.TemplateTitle>
                <S2.TemplateTable>
                    {textTemplateData.map((item, index) => (
                        <S2.TableRow key={index}>
                            <S2.TableCellHeader>{item.label}</S2.TableCellHeader>
                            <S2.TableCellData>
                                <textarea value={item.content} readOnly />
                            </S2.TableCellData>
                        </S2.TableRow>
                    ))}
                </S2.TemplateTable>
            </S2.TemplateWrapper>
        </div>
    );
};

export default RecommendLoadingPage;
