import * as S from './styled/styled';
import BookIcon from '../../../assets/common/book-icon.svg';
import Help from '../../../assets/common/help.svg';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import SmartPlanner from '../../../components/SmartPlanner/SmartPlanner';
import { useSmartPlanner, usePlannerDataEffect } from '../../../hooks/useSmartPlanner';
import { useFetchPlanner } from '../../../apis/smartPlanner/useSmartPlannerApi';
import { useState, useEffect } from 'react';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';
import { useAuthStore } from '../../../store/authStore';

const SmartPlannerPage = () => {
    const { user } = useAuthStore();
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [page, setPage] = useState(0);

    const { data: plannerData, error, isSuccess, isError } = useFetchPlanner();
    const { data, setData, handleSave } = useSmartPlanner();
    const planners = plannerData?.data?.planners;
    usePlannerDataEffect(isSuccess, planners, setData, isError, error);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const isMobileScreen = useIsMobileScreen(430);
    const isTabletScreen = useIsMobileScreen(1024);

    const renderTooltip = () => (
        <S.TooltipWrapper onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
            <S.Icon src={Help} $size={'16px'} />
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
        !isMobileScreen && page === 1 ? null : (
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
                        아래 플래너를 {user.name} 님만의 목표로 채워보세요!
                        {isMobileScreen ? <br /> : null}
                        <S.Subtitle>※ 최대 2개까지 작성할 수 있어요.</S.Subtitle>
                    </S.Text>
                </S.TextWrapper>
            </S.TextContainer>
        );
    const renderButtons = ({ isTablet }) => (
        <S.ButtonWrapper>
            <SquareButton
                width={isTablet ? '90px' : '131px'}
                height={isTablet ? '40px' : '60px'}
                fontSize={isTablet ? '14px' : '20px'}
                mobileWidth="340px"
                backgroundColor="deepgreen"
                onClick={() => handleSave(planners, page)}
            >
                저장
            </SquareButton>
            <SquareButton
                width={isTablet ? '90px' : '131px'}
                height={isTablet ? '40px' : '60px'}
                fontSize={isTablet ? '14px' : '20px'}
                mobileWidth="340px"
                backgroundColor={page === 0 ? 'lightgreen' : 'grey'}
                onClick={() => setPage((prev) => (page === 0 ? prev + 1 : prev - 1))}
            >
                {page === 0 ? '다음' : '이전'}
            </SquareButton>
        </S.ButtonWrapper>
    );

    return (
        <S.MainContainer>
            <S.ComponentContainer>
                {renderTitleContent()}
                <SmartPlanner data={data} onDataChange={setData} page={page} />
                {renderButtons({ isTablet: isTabletScreen })}
            </S.ComponentContainer>
        </S.MainContainer>
    );
};

export default SmartPlannerPage;
