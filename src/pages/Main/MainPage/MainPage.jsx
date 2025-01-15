import * as S from './styled/styled';
import Logo from '../../../assets/common/cm.svg';
import Boy from '../../../assets/MainPage/boy.svg';
import Girl from '../../../assets/MainPage/girl.svg';
import Books from '../../../assets/MainPage/books.svg';
import Note from '../../../assets/MainPage/note.svg';
import Search from '../../../assets/MainPage/search.svg';
import CheckTextBox from '../../../components/MainPage/CheckTextBox/CheckTextBox';
import InterviewBox from '../../../components/MainPage/InterviewBox/InterviewBox';
import Card from '../../../components/MainPage/Card/Card';
import OvalButton from '../../../components/common/Button/OvalButton/OvalButton';

const cards = [
    {
        title: '커리어 정리',
        url: Books,
        first: '각 직무별로 최적화된 템플릿을 제공',
        second: '경험을 하여 스스로 느낀 것을 회고하여 정리하도록 도와드려요.',
    },
    {
        title: '맞춤형 채용 공고 추천',
        url: Search,
        first: '적합한 채용 공고를 찾기 위한\n시간 낭비는 그만!',
        second: '커리어 메이트가 커리어 정리 템플릿을 분석하고 딱 맞는 채용 공고를 추천해드립니다.',
    },
    {
        title: '나의 커리어',
        url: Note,
        first: '커리어 정리 템플릿을 수정\n스크랩한 채용 공고 확인',
        second: '나의 커리어 발전 과정을 지속적으로 관리하고 업데이트할 수 있습니다.',
    },
];

const MainPage = () => {
    return (
        <S.MainContainer>
            <S.FirstPage>
                <object width="300px" type="image/svg+xml" data={Logo}></object>
                <S.FirstTextWrapper>
                    경험 정리부터 지원까지
                    <b>
                        <span>커리어 메이트</span>가 함께합니다
                    </b>
                </S.FirstTextWrapper>
            </S.FirstPage>
            <S.SecondPage>
                <S.SecondContainer>
                    <h1>혹시,</h1>
                    <S.SecondCheckWrapper>
                        <CheckTextBox>
                            지금껏 열심히 해 온 활동들을&nbsp;<strong>주먹구구식으로 나열</strong>하여 정리하고 있나요?
                        </CheckTextBox>
                        <CheckTextBox>
                            채용 플랫폼이 너무 많아서 어느 사이트 먼저 둘러봐야 할 지 몰라&nbsp;
                            <strong>막막함을 느끼고 있나요?</strong>
                        </CheckTextBox>
                    </S.SecondCheckWrapper>
                </S.SecondContainer>
            </S.SecondPage>
            <S.ThirdPage>
                <S.ThirdText>
                    실제 개발자 취준생을 대상으로 인터뷰를 하여 어려움을 자세히 들여다 보았습니다.
                </S.ThirdText>
                <S.InterViewBoxWrapper>
                    <InterviewBox type="left" url={Boy}>
                        “ 노션에 그간의 경험들을 정리하고 있어요. 쉽게 나열할 수 있다는 건 장점이지만, 실제 지원을 할 때
                        재구성을 해야 되는 점이 불편해요. “
                    </InterviewBox>
                    <InterviewBox type="right" url={Girl}>
                        “ 인스타그램을 통해 채용 공고를 확인하고 있는데, 매일 인스타그램에 접속하는 게 아니라서 놓치는
                        공고가 너무 많아요. “
                    </InterviewBox>
                </S.InterViewBoxWrapper>
            </S.ThirdPage>
            <S.FourthPage>
                <S.FourthTextWrapper>
                    <S.Text>모두의 커리어 성장을 함께 해요</S.Text>
                    <p>
                        <span>커리어 메이트</span>가 커리어 정리부터 지원까지 효율적으로 도와드립니다.
                    </p>
                </S.FourthTextWrapper>
                <S.CardWrapper>
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </S.CardWrapper>
            </S.FourthPage>
            <S.FifthPage>
                <S.FifthText>
                    커리어의 시작과 성장 과정을 <span>커리어 메이트</span>가 응원합니다!
                </S.FifthText>
                <OvalButton>로그인하고 프로필 설정하기</OvalButton>
            </S.FifthPage>
            <S.DashedLine>
                <line x1="20%" y1="5" x2="80%" y2="5" />
            </S.DashedLine>
            <S.OtherPage>
                <S.OtherTitle>B2B. 광고, 제휴 문의</S.OtherTitle>
                커리어 시작과 성장 관련한 협업 문의는 언제든 열려있습니다.
                <S.OtherBox>이메일 문의 | official@careermate.co.kr</S.OtherBox>
            </S.OtherPage>
        </S.MainContainer>
    );
};

export default MainPage;
