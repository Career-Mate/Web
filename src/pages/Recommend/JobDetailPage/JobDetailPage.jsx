import * as S from "./styled/styled.js";
import companyImg from "../../../assets/JobDetailPage/company.svg" 
import SquareButton from "../../../components/common/Button/SquareButton/SquareButton.jsx";
import JobDetailList from "../../../components/Recommend/JobDetailList/JobDetailList.jsx";
import { useNavigate } from "react-router-dom";

const JobDetailPage = ({data})=>{
    const navigate = useNavigate(); 
    const handlePrevNavigation = () => {
        navigate(-1);
    };
    const handleJobRecruitNavigation = () => {
        window.open("https://your-target-url.com", "_blank", "noopener,noreferrer");
    };


    return (
        <S.PageContainer>
        <S.ComponentContainer>
            <S.ImgWrapper>
                <S.StyledImg src = {data.companyImg||companyImg}/>
                <S.StyledImgOverlay/>
                <S.ImgTextWrapper>
                    <S.ImgTitleWrapper>
                        <S.ImgTitle>코딧(CODITcorp.)</S.ImgTitle>
                        <S.Hyperlink href="https://thecodit.com/kr-ko" target="_blank" rel="noopener noreferrer">
                            기업정보 자세히 보기 &gt;
                        </S.Hyperlink>
                    </S.ImgTitleWrapper>
                    
                    <S.ImgText>📍 서울 영등포구</S.ImgText>
                </S.ImgTextWrapper>
            </S.ImgWrapper>
            <S.SummaryWrapper>
                <S.SummaryTextWrapper>
                    <S.SummaryTitle><S.Highlight>코딧(CODIT)</S.Highlight>은 기술을 통해 법률 및 정책 정보를 누구나 알기 쉽게 제공하는 기업입니다.</S.SummaryTitle>
                    <S.SummaryText>어렵고 복잡한 법률 및 정책 시장을 혁신해 더 많은 사람들에게 혜택을 
                        누리도록 하는 일에 가슴이 뛰는 열정과 능력을 가지신 분들을 찾고 있습니다.</S.SummaryText>
                </S.SummaryTextWrapper>
                <S.ListWrapper>
                    {data.map((section,idx)=>(
                        <JobDetailList title = {section.title} items = {section.items} key={idx}></JobDetailList>
                    ))}
                </S.ListWrapper>
            </S.SummaryWrapper>
            <S.ButtonWrapper>
                <SquareButton backgroundColor={"grey"} onClick={handlePrevNavigation}>이전으로 돌아가기</SquareButton>
                <SquareButton backgroundColor={"deepgreen"} onClick={handleJobRecruitNavigation}>채용공고 자세히 보러가기</SquareButton>
            </S.ButtonWrapper>
        </S.ComponentContainer>
        </S.PageContainer>
    )
}

export default JobDetailPage;