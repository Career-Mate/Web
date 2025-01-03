import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
  }
`;

const TemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 983px;
    gap: 10px;
    padding-bottom: 65px;
`;

const TemplateTitle = styled.h2`
    font-family: 'Albert Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: -0.011em;
    color: #000000;
    margin: 0;
`;

const TemplateTable = styled.div`
    display: flex;
    flex-direction: column;
    width: 976px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TableRow = styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-child {
        border-bottom: none;
    }
`;

const TableCellHeader = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    width: 208px;
    background: #cbf8dd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.8);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-left-radius: ${(props) => (props.isLastRow ? '12px' : '0')};
`;

const TableCellData = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFirstRow', 'isLastRow'].includes(prop),
})`
    flex-grow: 1;
    width: 768px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-family: 'Inter', sans-serif;
    border-top-right-radius: ${(props) => (props.isFirstRow ? '12px' : '0')};
    border-bottom-right-radius: ${(props) => (props.isLastRow ? '12px' : '0')};

    input {
        width: 100%;
        border: none;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.8);
        background: none;
        outline: none;
    }
`;

const UserTemplate = () => {
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
        {
            title: '2. 프로젝트 경험',
            items: [
                { label: '프로젝트명', content: 'AI 추천 시스템 개발' },
                { label: '기간', content: '2023년 1월 ~ 2023년 6월' },
                { label: '주요 성과 및 역할', content: '프론트엔드 개발 및 성능 최적화' },
                { label: '느낀점 / 배운점', content: '팀 협업의 중요성과 사용자 경험 최적화 학습' },
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

export default UserTemplate;
