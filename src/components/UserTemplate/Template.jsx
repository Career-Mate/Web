import { useState } from 'react';
import * as S from './styled/styled';

const Template = () => {
    const [data, setData] = useState([
        {
            title: '1. 인턴 경험',
            items: [
                { label: '직무명', content: '프론트엔드 개발자', placeholder: '직무명을 입력해주세요' },
                { label: '근무기간', content: '2021년 3월 ~ 2022년 1월', placeholder: '근무기간을 정해주세요' },
                { label: '회사명', content: 'Kakao Bank', placeholder: '회사명을 입력해주세요' },
                {
                    label: '주요 성과 및 역할',
                    content: 'React를 사용하여 웹 애플리케이션 개발',
                    placeholder: '주요 성과 및 역할을 입력해주세요',
                },
                {
                    label: '느낀점 / 배운점',
                    content: '코드 최적화와 성능 향상의 중요성 학습',
                    placeholder: '느낀점/배운점을 입력해주세요',
                },
            ],
        },
    ]);

    const handleInputChange = (sectionIndex, itemIndex, value) => {
        const updatedData = [...data];
        updatedData[sectionIndex].items[itemIndex].content = value;
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
                                    </S.TableCellHeader>
                                    <S.TableCellData
                                        isFirstRow={itemIndex === 0}
                                        isLastRow={itemIndex === section.items.length - 1}
                                    >
                                        <input
                                            type="text"
                                            value={item.content}
                                            placeholder={item.placeholder}
                                            onChange={(e) => handleInputChange(sectionIndex, itemIndex, e.target.value)}
                                        />
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
