import * as S from './styled/styled';
import { useState } from 'react';
import useTemplateData from '../../../hooks/useTemplateData';

const TextTemplate = () => {
    const { handleInputChange } = useTemplateData();
    const [data, setData] = useState([
        {
            title: '5. 최종 정리',
            items: [
                {
                    label: '위에 기술한 경험들을 통해 내가 성장한 부분은 무엇인가요?',
                    content: '',
                    placeholder: '내용을 입력해주세요',

                    required: true,
                },
                {
                    label: '다양한 경험을 통해 발견한 나의 성향이나 강점은 무엇인가요?',
                    content: '',
                    placeholder: '내용을 입력해주세요',
                },
                {
                    label: '다양한 경험을 통해 발견한 나의 단점은 무엇이고, 이를 어떻게 보완할 계획인가요?',
                    content: '',
                    placeholder: '내용을 입력해주세요',
                },
                {
                    label: '앞으로 어떤 모습의 웹 개발자로 성장하고 싶나요?',
                    content: '',
                    placeholder: '내용을 입력해주세요',
                },
            ],
        },
    ]);

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
                                </S.TableCellHeader>
                                <S.TableCellData
                                    isFirstRow={itemIndex === 0}
                                    isLastRow={itemIndex === section.items.length - 1}
                                >
                                    <textarea
                                        value={item.content}
                                        placeholder={item.placeholder}
                                        onChange={(e) => handleInputChange(sectionIndex, itemIndex, e.target.value)}
                                    ></textarea>
                                </S.TableCellData>
                            </S.TableRow>
                        ))}
                    </S.TemplateTable>
                </S.TemplateWrapper>
            ))}
        </div>
    );
};

export default TextTemplate;
