import * as S from './styled/styeld';
import ContentCard from '../../components/common/Card/ContentCard/ContentCard'
const RecommendContentPage = ({ user = '' }) => {
    return (
        <S.Container>
            <S.TopContainer>
                <S.Title>추천 콘텐츠</S.Title>
                <S.TextWrapper>
                    <S.Text><S.Highlight>{user} 메이트님</S.Highlight> 의 커리어와 관련한 콘텐츠에요!</S.Text>
                    <S.Text> 오른쪽 하단 스크랩 버튼을 클릭하면 나의 커리어에 저장돼요. </S.Text>
                </S.TextWrapper>
            </S.TopContainer>
            <S.BottomContainer>
                <S.JobBox>직무 | 프론트엔드 개발자</S.JobBox>
                <S.CardWrapper>
                    <ContentCard contentName={"프론트엔드 채용 담당자가 말하는 개발자 취업 현실"}/>
                    <ContentCard contentName={"프론트엔드 채용 담당자가 말하는 개발자 취업 현실"}/>
                    <ContentCard contentName={"프론트엔드 채용 담당자가 말하는 개발자 취업 현실"}/>
                </S.CardWrapper>
            </S.BottomContainer>
        </S.Container>
    );
};

export default RecommendContentPage;
