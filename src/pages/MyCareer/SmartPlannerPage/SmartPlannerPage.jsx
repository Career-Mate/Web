import * as S from './styled/styled';
import BookIcon from '../../../assets/common/book-icon.svg';
import { GrCircleQuestion } from 'react-icons/gr';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import SmartPlanner from '../../../components/SmartPlanner/SmartPlanner';
import { useSmartPlanner, usePlannerDataEffect } from '../../../hooks/useSmartPlanner';
import { useFetchPlanner } from '../../../apis/smartPlanner/useSmartPlannerApi';
import { useState,useEffect } from 'react';

const SmartPlannerPage = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [page, setPage] = useState(0);
    const pageChange = (num) => {
        setPage((prev) => prev + num);
        window.scrollTo(0, 0);
    };
    const { data, setData, canSave, handleSave } = useSmartPlanner();
    const { data: plannerData, error, isSuccess, isError } = useFetchPlanner();

    const planners = plannerData?.data?.planners;
    console.log(plannerData?.data);
    console.log(data);
    usePlannerDataEffect(isSuccess, planners, setData, isError, error);
    
    const renderTooltip = () => (
        <S.TooltipWrapper onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
            <GrCircleQuestion />
            {tooltipVisible && (
                <S.Tooltip>
                    <S.TooltipText>
                        SMART 방법이 더 궁금하다면
                        <br />
                        <S.Hyperlink
                            href="https://www.tableau.com/ko-kr/learn/articles/smart-goals-criteria"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            이 콘텐츠
                        </S.Hyperlink>
                        를 참고해보세요!
                    </S.TooltipText>
                </S.Tooltip>
            )}
        </S.TooltipWrapper>
    );
    const renderTitleContent = () =>
        page === 0 ? (
            <>
                <S.TextContainer>
                    <S.Title>
                        <S.Icon src={BookIcon} />
                        SMART 커리어 플래너
                        {renderTooltip()}
                    </S.Title>
                    <S.TextWrapper>
                        <S.Text>
                            SMART 기법은 목표를 설정할 때, 명확하고 구체적인 성과 목표를 세우기 위한 방법론입니다.
                        </S.Text>
                        <S.Text>
                            아래 플래너를 OOO 님만의 목표로 채워보세요!
                            <S.Subtitle>※ 최대 2개까지 작성할 수 있어요.</S.Subtitle>
                        </S.Text>
                    </S.TextWrapper>
                </S.TextContainer>
            </>
        ) : null;
    const renderButtons = () => (
        <S.ButtonWrapper>
            <SquareButton
                width="131px"
                height="60px"
                padding="18px 48px"
                backgroundColor="deepgreen"
                onClick={handleSave}
                disabled={!canSave}
            >
                저장
            </SquareButton>
            {page === 0 ? (
                <SquareButton
                    width="131px"
                    height="60px"
                    padding="18px 48px"
                    backgroundColor="lightgreen"
                    onClick={() => pageChange(1)}
                >
                    다음
                </SquareButton>
            ) : (
                <SquareButton
                    width="131px"
                    height="60px"
                    padding="18px 48px"
                    backgroundColor="grey"
                    onClick={() => pageChange(-1)}
                >
                    이전
                </SquareButton>
            )}
        </S.ButtonWrapper>
    );

    return (
        <S.MainContainer>
            {renderTitleContent()}
            <SmartPlanner data={data} onDataChange={setData} page={page}/>
            {renderButtons()}
        </S.MainContainer>
    );
};

export default SmartPlannerPage;
