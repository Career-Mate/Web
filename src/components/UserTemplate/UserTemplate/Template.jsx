import { useState } from 'react';
import {
    FontStyle,
    TemplateWrapper,
    TemplateTitle,
    TemplateTable,
    TableRow,
    TableCellHeader,
    TableCellData,
} from '../styled/styled';

const Template = () => {
    const [data, setData] = useState([
        {
            title: '1. 인턴 경험',
            items: [
                { label: '직무명', content: '프론트엔드 개발자' },
                { label: '근무기간', content: '2021년 3월 ~ 2022년 1월' },
                { label: '회사명', content: 'Kakao Bank' },
                { label: '주요 성과 및 역할', content: 'React를 사용하여 웹 애플리케이션 개발' },
                { label: '느낀점 / 배운점', content: '코드 최적화와 성능 향상의 중요성 학습' },
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
            <FontStyle />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Albert+Sans:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <div>
                {data.map((section, sectionIndex) => (
                    <TemplateWrapper key={sectionIndex}>
                        <TemplateTitle>{section.title}</TemplateTitle>
                        <TemplateTable>
                            {section.items.map((item, itemIndex) => (
                                <TableRow key={itemIndex}>
                                    <TableCellHeader
                                        isFirstRow={itemIndex === 0}
                                        isLastRow={itemIndex === section.items.length - 1}
                                    >
                                        {item.label}
                                    </TableCellHeader>
                                    <TableCellData
                                        isFirstRow={itemIndex === 0}
                                        isLastRow={itemIndex === section.items.length - 1}
                                    >
                                        <input
                                            type="text"
                                            value={item.content}
                                            onChange={(e) => handleInputChange(sectionIndex, itemIndex, e.target.value)}
                                        />
                                    </TableCellData>
                                </TableRow>
                            ))}
                        </TemplateTable>
                    </TemplateWrapper>
                ))}
            </div>
        </>
    );
};

export default Template;
