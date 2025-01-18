import SubMenu from '../../../components/common/Menu/SubMenu/SubMenu';
import * as S from './styled/styled';
import { useTemplateData, SmartPlannerInitialData } from '../../../hooks/useTemplateData';
import BookIcon from '../../../assets/common/bookIcon.svg';
import { GrCircleQuestion } from 'react-icons/gr';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import SmartPlanner from '../../../components/SmartPlanner/SmartPlanner';
import { useState } from 'react';

const SmartPlannerPage = () => {
    const { tooltipVisible, setTooltipVisible } = useTemplateData();
    const [page, setPage] = useState(0);
    const pageChange = (num) => {
        setPage((prev) => prev + num);
    };
    return (
        <S.MainContainer>
            {page == 0 ? (
                <>
                    <S.TextWrapper>
                        <S.Title>
                            <S.Icon src={BookIcon} />
                            SMART 커리어 플래너
                            <S.TooltipWrapper
                                onMouseEnter={() => setTooltipVisible(true)}
                                onMouseLeave={() => setTooltipVisible(false)}
                            >
                                <GrCircleQuestion />
                                {tooltipVisible && (
                                    <S.Tooltip>
                                        <S.TooltipText>
                                            SMART 방법이 더 궁금하다면
                                            <br />
                                            <S.Hyperlink href="https://www.tableau.com/ko-kr/learn/articles/smart-goals-criteria"
                                                target="_blank" rel="noopener noreferrer">
                                                이 콘텐츠
                                            </S.Hyperlink>
                                            를 참고해보세요!
                                        </S.TooltipText>
                                    </S.Tooltip>
                                )}
                            </S.TooltipWrapper>
                        </S.Title>
                        <S.Text>
                            {
                                'SMART 기법은 목표를 설정할 때, 명확하고 구체적인 성과 목표를 세우기 위한 방법론입니다.\n아래 플래너를 OOO 님만의 목표로 채워보세요!'
                            }
                        </S.Text>
                    </S.TextWrapper>
                    <SmartPlanner />
                </>
            ) : (
                <SmartPlanner />
            )}

            {page == 0 ? (
                <S.ButtonWrapper>
                    <SquareButton width={'131px'} height={'60px'} padding={'18px 48px'} backgroundColor={'deepgreen'}>
                        저장
                    </SquareButton>
                    <SquareButton
                        width={'131px'}
                        height={'60px'}
                        padding={'18px 48px'}
                        backgroundColor={'lightgreen'}
                        onClick={() => {
                            pageChange(1);
                        }}
                    >
                        다음
                    </SquareButton>
                </S.ButtonWrapper>
            ) : (
                <S.ButtonWrapper>
                    <SquareButton width={'131px'} height={'60px'} padding={'18px 48px'} backgroundColor={'deepgreen'}>
                        저장
                    </SquareButton>
                    <SquareButton
                        width={'131px'}
                        height={'60px'}
                        padding={'18px 48px'}
                        backgroundColor={'grey'}
                        onClick={() => {
                            pageChange(-1);
                        }}
                    >
                        이전
                    </SquareButton>
                </S.ButtonWrapper>
            )}
        </S.MainContainer>
    );
};

export default SmartPlannerPage;
