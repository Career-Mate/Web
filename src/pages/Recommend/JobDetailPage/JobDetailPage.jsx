import * as S from './styled/styled.js';
import companyImg from '../../../assets/JobDetailPage/company.svg';
import RabbitLogo from '../../../assets/JobDetailPage/rabbit-logo.svg';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton.jsx';
import JobDetailList from '../../../components/Recommend/JobDetailList/JobDetailList.jsx';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useFetchDetail } from '../../../apis/JobDetail/useJobDetailApi.js';
import { mapJobDetailData } from '../../../utils/JobDetailList/JobDetailMapper.js';
import { useState, useEffect } from 'react';

const JobDetailPage = () => {
    const { id } = useParams();
    const { data: detail, isLoading, isError } = useFetchDetail(id);
    const [speechVisible, setSpeechVisible] = useState(false);

    const location = useLocation();
    const prevPage = location.state?.page || 1;

    const onAIChatClick = () => {
        setSpeechVisible((prev) => !prev);
    };

    const navigate = useNavigate();
    const handlePrevNavigation = () => {
        navigate('/recommend/job', { state: { page: prevPage } });
    };
    const handleJobRecruitNavigation = () => {
        window.open(detail?.data?.recruitUrl, '_blank', 'noopener,noreferrer');
    };

    const autoResize = (textarea) => {
        if (textarea) {
            textarea.style.height = '20px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [detail]);
    useEffect(() => {
        document.querySelectorAll('textarea').forEach((textarea) => {
            autoResize(textarea);
        });
    }, [speechVisible]);

    if (isLoading) {
        return <div>데이터 로딩 중...</div>;
    }

    if (isError) {
        return <div>데이터를 불러올 수 없습니다.</div>;
    }

    const detailListData = mapJobDetailData(detail);

    return (
        <S.PageContainer>
            <S.ComponentContainer>
                <S.ImgWrapper>
                    <S.StyledImg src={companyImg} />
                    <S.StyledImgOverlay />
                    <S.ImgTextWrapper>
                        <S.ImgTitleWrapper>
                            <S.ImgTitle>{detail?.data?.companyName}</S.ImgTitle>
                            <S.Hyperlink href={detail?.data?.companyInfoUrl} target="_blank" rel="noopener noreferrer">
                                기업정보 자세히 보기 &gt;
                            </S.Hyperlink>
                        </S.ImgTitleWrapper>
                        <S.ImgText>📍 {detail?.data?.region}</S.ImgText>
                    </S.ImgTextWrapper>
                </S.ImgWrapper>
                <S.SummaryWrapper>
                    <S.ListWrapper>
                        {detailListData.map((section, idx) => (
                            <JobDetailList title={section.title} content={section.content} key={idx}></JobDetailList>
                        ))}
                    </S.ListWrapper>
                </S.SummaryWrapper>
                <S.ButtonWrapper>
                    <SquareButton backgroundColor={'grey'} onClick={handlePrevNavigation}>
                        이전으로 돌아가기
                    </SquareButton>
                    <SquareButton backgroundColor={'deepgreen'} onClick={handleJobRecruitNavigation}>
                        채용공고 자세히 보러가기
                    </SquareButton>
                </S.ButtonWrapper>
            </S.ComponentContainer>
            <S.AIChatBotWrapper>
                {speechVisible && (
                    <>
                        <S.AIChatBubbleWrapper>
                            <textarea id={id} readOnly value={detail?.data?.comment} />
                        </S.AIChatBubbleWrapper>
                        <S.AIChatBubbleTail />
                        <S.AIChatBubbleTailInner />
                    </>
                )}
                <S.AIProfile onClick={onAIChatClick}>
                    <S.RabbitImg src={RabbitLogo} />
                </S.AIProfile>
            </S.AIChatBotWrapper>
        </S.PageContainer>
    );
};

export default JobDetailPage;
