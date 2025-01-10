import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './styled/styled';

const Template = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const [data, setData] = useState([
        {
            title: '1. 인턴 경험',
            items: [
                { label: '직무명', content: '', placeholder: '직무명을 입력해주세요', type: 'text', required: true },
                {
                    label: '근무기간',
                    content: '',
                    placeholder: '근무기간을 정해주세요',
                    type: 'date',
                    startDate: null,
                    endDate: null,
                },
                { label: '회사명', content: '', placeholder: '회사명을 입력해주세요', type: 'text' },
                {
                    label: '주요 성과 및 역할',
                    content: '',
                    placeholder: '주요 성과 및 역할을 입력해주세요',
                    type: 'text',
                },
                { label: '느낀점 / 배운점', content: '', placeholder: '느낀점/배운점을 입력해주세요', type: 'text' },
            ],
        },
    ]);

    const handleInputChange = (sectionIndex, itemIndex, value) => {
        const updatedData = [...data];
        updatedData[sectionIndex].items[itemIndex].content = value;
        setData(updatedData);
    };

    const handleDateChange = (sectionIndex, itemIndex, date, isStartDate) => {
        const updatedData = [...data];
        if (isStartDate) {
            updatedData[sectionIndex].items[itemIndex].startDate = date;

            if (updatedData[sectionIndex].items[itemIndex].endDate < date) {
                updatedData[sectionIndex].items[itemIndex].endDate = null;
            }
        } else {
            updatedData[sectionIndex].items[itemIndex].endDate = date;
        }
        setData(updatedData);
    };

    return (
        <>
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
                                                        <S.TooltipText>
                                                            직무명, 근무기간, 회사명, 주요 성과 및 역할은 꼭
                                                            입력해주세요 !
                                                        </S.TooltipText>
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
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaCalendarAlt
                                                    style={{
                                                        marginRight: '8px',
                                                        color: 'grey',
                                                    }}
                                                />
                                                <DatePicker
                                                    selected={item.startDate}
                                                    onChange={(date) =>
                                                        handleDateChange(sectionIndex, itemIndex, date, true)
                                                    }
                                                    selectsStart
                                                    startDate={item.startDate}
                                                    endDate={item.endDate}
                                                    placeholderText="시작 날짜를 선택해주세요"
                                                    dateFormat="yyyy년 MM월 dd일"
                                                />
                                                <FaCalendarAlt
                                                    style={{
                                                        marginRight: '8px',
                                                        color: 'grey',
                                                    }}
                                                />
                                                <DatePicker
                                                    selected={item.endDate}
                                                    onChange={(date) =>
                                                        handleDateChange(sectionIndex, itemIndex, date, false)
                                                    }
                                                    selectsEnd
                                                    startDate={item.startDate}
                                                    endDate={item.endDate}
                                                    minDate={item.startDate}
                                                    placeholderText="종료 날짜를 선택해주세요"
                                                    dateFormat="yyyy년 MM월 dd일"
                                                />
                                            </div>
                                        ) : (
                                            <input
                                                type="text"
                                                value={item.content}
                                                placeholder={item.placeholder}
                                                onChange={(e) =>
                                                    handleInputChange(sectionIndex, itemIndex, e.target.value)
                                                }
                                            />
                                        )}
                                    </S.TableCellData>
                                </S.TableRow>
                            ))}
                        </S.TemplateTable>
                    </S.TemplateWrapper>
                ))}
            </div>
        </>
    );
};

export default Template;
